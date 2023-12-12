import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { FssController } from './fss.controller'

import { FssModel } from './fss.model'
import { FssService } from './fss.service'

@Module({
	controllers: [FssController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: FssModel,
				schemaOptions: {
					collection: 'FSS',
				},
			},
		]),
	],
	providers: [FssService],
})
export class FssModule {}
