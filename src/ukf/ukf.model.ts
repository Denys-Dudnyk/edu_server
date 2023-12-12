import { prop } from '@typegoose/typegoose'

import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface UkfModel extends Base {}

export class Philosophical {
	@prop()
	name: string

	@prop()
	length: string

	@prop()
	language: string

	@prop()
	deadline: string

	@prop()
	description: string
}

export class Pedagogical {
	@prop()
	name: string

	@prop()
	length: string

	@prop()
	language: string

	@prop()
	deadline: string

	@prop()
	description: string
}

export class European {
	@prop()
	name: string

	@prop()
	length: string

	@prop()
	language: string

	@prop()
	deadline: string

	@prop()
	description: string
}

export class Sciences_Health {
	@prop()
	name: string

	@prop()
	length: string

	@prop()
	language: string

	@prop()
	deadline: string

	@prop()
	description: string
}

export class Sciences_Informatics {
	@prop()
	name: string

	@prop()
	length: string

	@prop()
	language: string

	@prop()
	deadline: string

	@prop()
	description: string
}

export class UkfModel extends TimeStamps {
	@prop()
	name: string

	@prop()
	length: string

	@prop()
	language: string

	@prop()
	deadline: string

	@prop()
	description: string

	@prop()
	nameUA: string
	@prop()
	nameEN: string
	@prop()
	lengthUA: string
	@prop()
	lengthEN: string
	@prop()
	languageUA: string
	@prop()
	languageEN: string
	@prop()
	descriptionUA: string
	@prop()
	descriptionEN: string

	// 	@prop()
	// 	philosophical?: Philosophical

	// 	@prop()
	// 	pedagogical?: Pedagogical

	// 	@prop()
	// 	european?: European

	// 	@prop()
	// 	sciences_health?: Sciences_Health

	// 	@prop()
	// 	sciences_informatics?: Sciences_Informatics
}
