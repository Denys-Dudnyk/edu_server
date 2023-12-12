import { IsObject, IsString } from 'class-validator'

export class University {
	@IsString()
	item1: string

	@IsString()
	item2: string

	@IsString()
	item3: string
	@IsString()
	item4: string
	@IsString()
	item5: string
	@IsString()
	item6: string
}

export class BNG {
	@IsString()
	item1: string

	@IsString()
	item2: string

	@IsString()
	item3: string
	@IsString()
	item4: string
	@IsString()
	item5: string
	@IsString()
	item6: string
}

export class InfoHelp {
	@IsString()
	item1: string

	@IsString()
	item2: string

	@IsString()
	item3: string
	@IsString()
	item4: string
	@IsString()
	item5: string
	@IsString()
	item6: string

	@IsString()
	item7: string
}

export class Dormitory {
	@IsString()
	item1: string

	@IsString()
	item2: string

	@IsString()
	item3: string
	@IsString()
	item4: string
	@IsString()
	item5: string
	@IsString()
	item6: string
}

export class Result {
	@IsString()
	item1: string

	@IsString()
	item2: string
}

export class CreateProductDto {
	@IsString()
	title: string

	@IsString()
	slug: string

	@IsString()
	description: string

	@IsString()
	descriptionItem: string

	@IsString()
	price: string

	@IsString()
	oldPrice: string

	@IsString()
	image: string

	@IsObject()
	university?: University

	@IsObject()
	permit?: BNG

	@IsObject()
	dormitory?: Dormitory

	@IsObject()
	infohelp?: InfoHelp

	@IsObject()
	result?: Result

	@IsString()
	titleUA: string
	@IsString()
	descriptionUA: string
	@IsString()
	descriptionItemUA: string

	@IsString()
	titleEN: string
	@IsString()
	descriptionEN: string
	@IsString()
	descriptionItemEN: string
}
