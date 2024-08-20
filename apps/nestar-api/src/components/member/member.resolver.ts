import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { InternalServerErrorException, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Member } from '../../libs/dto/member/member';

@Resolver()
export class MemberResolver {
	//memberService - objeckt
	//MemberService - class
	constructor(private readonly memberService: MemberService) {}

	@Mutation(() => Member)
	@UsePipes(ValidationPipe)
	public async signup(@Args('input') input: MemberInput): Promise<Member> {
		try {
			console.log('Mutation: sigup');
			console.log('Input:', input);
			return this.memberService.signup(input);
		} catch (err) {
			console.log('Error: ', err);
			throw new InternalServerErrorException(err);
		}
	}
	@Mutation(() => String)
	@UsePipes(ValidationPipe)
	public async login(@Args('input') input: LoginInput): Promise<string> {
		try {
			console.log('Mutation: sigup');
			console.log('Input:', input);
			return this.memberService.login();
		} catch (err) {
			console.log('Error: ', err);
			throw new InternalServerErrorException(err);
		}
	}
	@Mutation(() => String)
	public async updateMember(): Promise<string> {
		console.log('Mutation: updateMember');
		return this.memberService.updateMember();
	}
	@Query(() => String)
	public async getMember(): Promise<string> {
		console.log('Query: getMember');
		return this.memberService.getMember();
	}
}
