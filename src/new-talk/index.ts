import {
	Rule,
	Tree,
	SchematicContext,
	apply,
	url,
	applyTemplates,
	move,
	chain,
	mergeWith,
} from '@angular-devkit/schematics';

import {strings, normalize} from '@angular-devkit/core';

import {NewTalkOptions} from './schema';

export function newTalk(options: NewTalkOptions): Rule {
	const templateSource = apply(url('./files'), [
		applyTemplates({
			classify: strings.classify,
			dasherize: strings.dasherize,
			camelize: strings.camelize,
			name: options.name,
			dot: '.',
		}),
		move(normalize(strings.dasherize(options.name))),
	]);
	return (tree: Tree, _context: SchematicContext) => {
		return chain([mergeWith(templateSource)])(tree, _context);
	};
}
