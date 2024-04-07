import {Tree} from '@angular-devkit/schematics';
import {SchematicTestRunner} from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('schematics', () => {
	it('works', async () => {
		const runner = new SchematicTestRunner('new-talk', collectionPath);
		const tree = await runner.runSchematic(
			'new-talk',
			{name: 'Titre Provisoire'},
			Tree.empty(),
		);

		expect(tree.files).toEqual([
			'/titre-provisoire/.gitignore',
			'/titre-provisoire/index.html',
			'/titre-provisoire/package.json',
			'/titre-provisoire/tsconfig.json',
			'/titre-provisoire/vite.config.ts',
			'/titre-provisoire/titre-provisoire/README.md',
			'/titre-provisoire/titre-provisoire/.github/workflows/publish.yml',
			'/titre-provisoire/titre-provisoire/public/titre-provisoire.md',
			'/titre-provisoire/titre-provisoire/src/main.ts',
			'/titre-provisoire/titre-provisoire/src/style.scss',
			'/titre-provisoire/titre-provisoire/src/vite-env.d.ts',
		]);
	});
});
