/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'Todos';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDone: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "todos" */
export type TodosAggregate = {
  __typename?: 'TodosAggregate';
  aggregate?: Maybe<TodosAggregateFields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "todos" */
export type TodosAggregateFields = {
  __typename?: 'TodosAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<TodosMaxFields>;
  min?: Maybe<TodosMinFields>;
};


/** aggregate fields of "todos" */
export type TodosAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TodosSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type TodosBoolExp = {
  _and?: InputMaybe<Array<TodosBoolExp>>;
  _not?: InputMaybe<TodosBoolExp>;
  _or?: InputMaybe<Array<TodosBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isDone?: InputMaybe<BooleanComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "todos" */
export enum TodosConstraint {
  /** unique or primary key constraint on columns "id" */
  TodoPkey = 'todo_pkey'
}

/** input type for inserting data into table "todos" */
export type TodosInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDone?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TodosMaxFields = {
  __typename?: 'TodosMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TodosMinFields = {
  __typename?: 'TodosMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "todos" */
export type TodosMutationResponse = {
  __typename?: 'TodosMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todos>;
};

/** on_conflict condition type for table "todos" */
export type TodosOnConflict = {
  constraint: TodosConstraint;
  update_columns?: Array<TodosUpdateColumn>;
  where?: InputMaybe<TodosBoolExp>;
};

/** Ordering options when selecting data from "todos". */
export type TodosOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isDone?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: todos */
export type TodosPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "todos" */
export enum TodosSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDone = 'isDone',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "todos" */
export type TodosSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDone?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "todos" */
export type TodosStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TodosStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TodosStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDone?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "todos" */
export enum TodosUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDone = 'isDone',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type TodosUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TodosSetInput>;
  /** filter the rows which have to be updated */
  where: TodosBoolExp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todos" */
  deleteTodos?: Maybe<TodosMutationResponse>;
  /** delete single row from the table: "todos" */
  deleteTodosByPk?: Maybe<Todos>;
  /** insert data into the table: "todos" */
  insertTodos?: Maybe<TodosMutationResponse>;
  /** insert a single row into the table: "todos" */
  insertTodosOne?: Maybe<Todos>;
  /** update data of the table: "todos" */
  updateTodos?: Maybe<TodosMutationResponse>;
  /** update single row of the table: "todos" */
  updateTodosByPk?: Maybe<Todos>;
  /** update multiples rows of table: "todos" */
  updateTodosMany?: Maybe<Array<Maybe<TodosMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootDeleteTodosArgs = {
  where: TodosBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteTodosByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertTodosArgs = {
  objects: Array<TodosInsertInput>;
  onConflict?: InputMaybe<TodosOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTodosOneArgs = {
  object: TodosInsertInput;
  onConflict?: InputMaybe<TodosOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdateTodosArgs = {
  _set?: InputMaybe<TodosSetInput>;
  where: TodosBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateTodosByPkArgs = {
  _set?: InputMaybe<TodosSetInput>;
  pk_columns: TodosPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateTodosManyArgs = {
  updates: Array<TodosUpdates>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todosAggregate: TodosAggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todosByPk?: Maybe<Todos>;
};


export type Query_RootTodosArgs = {
  distinctOn?: InputMaybe<Array<TodosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TodosOrderBy>>;
  where?: InputMaybe<TodosBoolExp>;
};


export type Query_RootTodosAggregateArgs = {
  distinctOn?: InputMaybe<Array<TodosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TodosOrderBy>>;
  where?: InputMaybe<TodosBoolExp>;
};


export type Query_RootTodosByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todosAggregate: TodosAggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todosByPk?: Maybe<Todos>;
  /** fetch data from the table in a streaming manner: "todos" */
  todosStream: Array<Todos>;
};


export type Subscription_RootTodosArgs = {
  distinctOn?: InputMaybe<Array<TodosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TodosOrderBy>>;
  where?: InputMaybe<TodosBoolExp>;
};


export type Subscription_RootTodosAggregateArgs = {
  distinctOn?: InputMaybe<Array<TodosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TodosOrderBy>>;
  where?: InputMaybe<TodosBoolExp>;
};


export type Subscription_RootTodosByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTodosStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<TodosStreamCursorInput>>;
  where?: InputMaybe<TodosBoolExp>;
};

export type TodoTableFragment = { __typename?: 'Todos', id: any, title: string } & { ' $fragmentName'?: 'TodoTableFragment' };

export type InsertTodosMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type InsertTodosMutation = { __typename?: 'mutation_root', insertTodos?: { __typename?: 'TodosMutationResponse', returning: Array<{ __typename?: 'Todos', id: any }> } | null };

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'query_root', todos: Array<{ __typename?: 'Todos', id: any, title: string }> };

export const TodoTableFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TodoTable"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Todos"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<TodoTableFragment, unknown>;
export const InsertTodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertTodos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertTodos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<InsertTodosMutation, InsertTodosMutationVariables>;
export const GetTodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetTodosQuery, GetTodosQueryVariables>;