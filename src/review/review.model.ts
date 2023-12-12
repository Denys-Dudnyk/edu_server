import { prop } from '@typegoose/typegoose'

import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface ReviewModel extends Base {}

export class ReviewModel extends TimeStamps {
	@prop()
	name: string

	@prop()
	specialty: string

	@prop()
	description: string

	@prop()
	image: string
}
