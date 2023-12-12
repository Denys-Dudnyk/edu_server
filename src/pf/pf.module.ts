import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { PfController } from './pf.controller'

import { PfModel } from './pf.model'
import { PfService } from './pf.service'

@Module({
	controllers: [PfController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: PfModel,
				schemaOptions: {
					collection: 'PF',
				},
			},
		]),
	],
	providers: [PfService],
})
export class PfModule {}
