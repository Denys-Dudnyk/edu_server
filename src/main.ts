import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api')

	//const PORT = process.env.PORT || 4200
	// await app.listen(4200)

	app.enableCors()
	const PORT = process.env.PORT
	await app.listen(PORT)
}
bootstrap()
