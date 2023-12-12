import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { UkfController } from './ukf.controller'
import { UkfModel } from './ukf.model'
import { UkfService } from './ukf.service'

@Module({
	controllers: [UkfController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: UkfModel,
				schemaOptions: {
					collection: 'Ukf',
				},
			},
		]),
	],
	providers: [UkfService],
})
export class UkfModule {}
