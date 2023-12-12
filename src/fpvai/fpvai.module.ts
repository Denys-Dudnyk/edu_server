import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { FpvaiController } from './fpvai.controller'

import { FpvaiModel } from './fpvai.model'
import { FpvaiService } from './fpvai.service'

@Module({
	controllers: [FpvaiController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: FpvaiModel,
				schemaOptions: {
					collection: 'FPVAI',
				},
			},
		]),
	],
	providers: [FpvaiService],
})
export class FpvaiModule {}
