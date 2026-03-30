import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
	STORYBOOK_MCP_INSTRUCTIONS,
	addGetDocumentationTool,
	addGetStoryDocumentationTool,
	addListAllDocumentationTool,
	type StorybookContext,
} from '@storybook/mcp';
import { ValibotJsonSchemaAdapter } from '@tmcp/adapter-valibot';
import { StdioTransport } from '@tmcp/transport-stdio';
import { McpServer } from 'tmcp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const manifestsDir = path.resolve(__dirname, 'manifests');

const pkg = JSON.parse(await fs.readFile(path.resolve(__dirname, '..', 'package.json'), 'utf-8'));

const adapter = new ValibotJsonSchemaAdapter();

const server = new McpServer(
	{
		name: pkg.name,
		version: pkg.version,
		description: pkg.description,
	},
	{
		adapter,
		instructions: STORYBOOK_MCP_INSTRUCTIONS,
		capabilities: {
			tools: { listChanged: true },
		},
	},
).withContext<StorybookContext>();

server.ctx.custom = {
	manifestProvider: async (_request: Request | undefined, manifestPath: string) => {
		const fileName = path.basename(manifestPath);
		return await fs.readFile(path.resolve(manifestsDir, fileName), 'utf-8');
	},
};

await addListAllDocumentationTool(server);
await addGetDocumentationTool(server);
await addGetStoryDocumentationTool(server);

const transport = new StdioTransport(server);
transport.listen();
