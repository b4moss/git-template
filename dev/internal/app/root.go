package app

import (
	"fmt"

	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:   "app",
	Short: "Example CLI from the go-cli template",
	Long:  "Rename this binary and grow subcommands under internal/app.",
}

func Execute() error {
	return rootCmd.Execute()
}

func init() {
	rootCmd.AddCommand(versionCmd)
	rootCmd.AddCommand(helloCmd)
	helloCmd.Flags().BoolP("shout", "s", false, "uppercase greeting")
}

var versionCmd = &cobra.Command{
	Use:   "version",
	Short: "Print version",
	Run: func(cmd *cobra.Command, _ []string) {
		fmt.Fprintln(cmd.OutOrStdout(), "0.1.0")
	},
}

var helloCmd = &cobra.Command{
	Use:   "hello [name]",
	Short: "Print a greeting",
	Args:  cobra.MaximumNArgs(1),
	RunE: func(cmd *cobra.Command, args []string) error {
		name := "world"
		if len(args) == 1 && args[0] != "" {
			name = args[0]
		}
		shout, err := cmd.Flags().GetBool("shout")
		if err != nil {
			return err
		}
		msg := fmt.Sprintf("hello, %s", name)
		if shout {
			msg = fmt.Sprintf("HELLO, %s!", name)
		}
		fmt.Fprintln(cmd.OutOrStdout(), msg)
		return nil
	},
}
