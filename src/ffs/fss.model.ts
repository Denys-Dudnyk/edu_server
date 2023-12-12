import { prop } from '@typegoose/typegoose'

import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface UkfModel extends Base {}

export class FssModel extends TimeStamps {
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
}
