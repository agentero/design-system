Trigger a major version publish of @agentero/design-system.

1. Run `gh workflow run publish-major.yml --ref master` to trigger the major publish workflow.
2. Wait for the workflow to start, then run `gh run list --workflow=publish-major.yml --limit=1` to get the run ID.
3. Show the user the run URL so they can monitor it.
