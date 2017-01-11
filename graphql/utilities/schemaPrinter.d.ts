import { GraphQLSchema } from 'graphql/type/schema';
import { GraphQLType } from 'graphql/type/definition';

export function printSchema(schema: GraphQLSchema): string;

export function printIntrospectionSchema(schema: GraphQLSchema): string;

export function printType(type: GraphQLType): string;
