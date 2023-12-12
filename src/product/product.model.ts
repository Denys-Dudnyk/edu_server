import { prop } from '@typegoose/typegoose'

import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface ProductModel extends Base {}

export class University {
	@prop()
	item1: string

	@prop()
	item2: string

	@prop()
	item3: string
	@prop()
	item4: string
	@prop()
	item5: string
	@prop()
	item6: string
}

export class BNG {
	@prop()
	item1: string

	@prop()
	item2: string

	@prop()
	item3: string
	@prop()
	item4: string
	@prop()
	item5: string
	@prop()
	item6: string
}

export class Dormitory {
	@prop()
	item1: string

	@prop()
	item2: string

	@prop()
	item3: string
	@prop()
	item4: string
	@prop()
	item5: string
	@prop()
	item6: string
}

export class InfoHelp {
	@prop()
	item1: string

	@prop()
	item2: string

	@prop()
	item3: string
	@prop()
	item4: string
	@prop()
	item5: string
	@prop()
	item6: string
	@prop()
	item7: string
}

export class Result {
	@prop()
	item1: string

	@prop()
	item2: string
}

export class ProductModel extends TimeStamps {
	@prop()
	title: string

	@prop({ unique: true })
	slug: string

	@prop()
	description: string

	@prop()
	descriptionItem: string

	@prop()
	price: string

	@prop()
	oldPrice: string

	@prop()
	image: string

	@prop()
	university: University

	@prop()
	permit: BNG

	@prop()
	dormitory: Dormitory

	@prop()
	infohelp: InfoHelp

	@prop()
	result: Result

	@prop()
	titleUA: string
	@prop()
	descriptionUA: string

	@prop()
	descriptionItemUA: string

	@prop()
	titleEN: string
	@prop()
	descriptionEN: string

	@prop()
	descriptionItemEN: string
}
