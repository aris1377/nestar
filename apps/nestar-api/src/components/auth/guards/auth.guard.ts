import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Message } from 'apps/nestar-api/src/libs/enums/common.enum';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService) {}

	async canActivate(context: ExecutionContext | any): Promise<boolean> {
		console.info('--- @guard() Authentication [AuthGuard] ---');

		if (context.contextType === 'graphql') {
			//kirib kelyotgan req qolga olinadi
			const request = context.getArgByIndex(2).req;

			// tokenslarni qolfa olamiz
			const bearerToken = request.headers.authorization;
			if (!bearerToken) throw new BadRequestException(Message.TOKEN_NOT_EXIST);

			// console.log('bearer token =>', bearerToken);
			const token = bearerToken.split(' ')[1],
				//token - member datalarni qolga olib beradi
				authMember = await this.authService.verifyToken(token);
			// console.log('authMember =>', authMember);
			if (!authMember) throw new UnauthorizedException(Message.NOT_AUTHENTICATED);

			console.log('memberNick[auth] =>', authMember.memberNick);
			request.body.authMember = authMember;

			return true;
		}

		// description => http, rpc, gprs and etc are ignored
	}
}
