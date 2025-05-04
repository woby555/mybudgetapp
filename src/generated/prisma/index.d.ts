
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model budgets
 * 
 */
export type budgets = $Result.DefaultSelection<Prisma.$budgetsPayload>
/**
 * Model categories
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model transactions
 * 
 */
export type transactions = $Result.DefaultSelection<Prisma.$transactionsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Budgets
 * const budgets = await prisma.budgets.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Budgets
   * const budgets = await prisma.budgets.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.budgets`: Exposes CRUD operations for the **budgets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Budgets
    * const budgets = await prisma.budgets.findMany()
    * ```
    */
  get budgets(): Prisma.budgetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.transactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    budgets: 'budgets',
    categories: 'categories',
    transactions: 'transactions',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "budgets" | "categories" | "transactions" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      budgets: {
        payload: Prisma.$budgetsPayload<ExtArgs>
        fields: Prisma.budgetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.budgetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.budgetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>
          }
          findFirst: {
            args: Prisma.budgetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.budgetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>
          }
          findMany: {
            args: Prisma.budgetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>[]
          }
          create: {
            args: Prisma.budgetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>
          }
          createMany: {
            args: Prisma.budgetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.budgetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>[]
          }
          delete: {
            args: Prisma.budgetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>
          }
          update: {
            args: Prisma.budgetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>
          }
          deleteMany: {
            args: Prisma.budgetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.budgetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.budgetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>[]
          }
          upsert: {
            args: Prisma.budgetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>
          }
          aggregate: {
            args: Prisma.BudgetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudgets>
          }
          groupBy: {
            args: Prisma.budgetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.budgetsCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetsCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      transactions: {
        payload: Prisma.$transactionsPayload<ExtArgs>
        fields: Prisma.transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findFirst: {
            args: Prisma.transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findMany: {
            args: Prisma.transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          create: {
            args: Prisma.transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          createMany: {
            args: Prisma.transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          delete: {
            args: Prisma.transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          update: {
            args: Prisma.transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          deleteMany: {
            args: Prisma.transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          upsert: {
            args: Prisma.transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    budgets?: budgetsOmit
    categories?: categoriesOmit
    transactions?: transactionsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BudgetsCountOutputType
   */

  export type BudgetsCountOutputType = {
    transactions: number
  }

  export type BudgetsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | BudgetsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * BudgetsCountOutputType without action
   */
  export type BudgetsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetsCountOutputType
     */
    select?: BudgetsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BudgetsCountOutputType without action
   */
  export type BudgetsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    transactions: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CategoriesCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    budgets: number
    categories: number
    transactions: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budgets?: boolean | UsersCountOutputTypeCountBudgetsArgs
    categories?: boolean | UsersCountOutputTypeCountCategoriesArgs
    transactions?: boolean | UsersCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: budgetsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model budgets
   */

  export type AggregateBudgets = {
    _count: BudgetsCountAggregateOutputType | null
    _avg: BudgetsAvgAggregateOutputType | null
    _sum: BudgetsSumAggregateOutputType | null
    _min: BudgetsMinAggregateOutputType | null
    _max: BudgetsMaxAggregateOutputType | null
  }

  export type BudgetsAvgAggregateOutputType = {
    budget_id: number | null
    user_id: number | null
    amount: Decimal | null
  }

  export type BudgetsSumAggregateOutputType = {
    budget_id: number | null
    user_id: number | null
    amount: Decimal | null
  }

  export type BudgetsMinAggregateOutputType = {
    budget_id: number | null
    user_id: number | null
    name: string | null
    amount: Decimal | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
  }

  export type BudgetsMaxAggregateOutputType = {
    budget_id: number | null
    user_id: number | null
    name: string | null
    amount: Decimal | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
  }

  export type BudgetsCountAggregateOutputType = {
    budget_id: number
    user_id: number
    name: number
    amount: number
    start_date: number
    end_date: number
    created_at: number
    _all: number
  }


  export type BudgetsAvgAggregateInputType = {
    budget_id?: true
    user_id?: true
    amount?: true
  }

  export type BudgetsSumAggregateInputType = {
    budget_id?: true
    user_id?: true
    amount?: true
  }

  export type BudgetsMinAggregateInputType = {
    budget_id?: true
    user_id?: true
    name?: true
    amount?: true
    start_date?: true
    end_date?: true
    created_at?: true
  }

  export type BudgetsMaxAggregateInputType = {
    budget_id?: true
    user_id?: true
    name?: true
    amount?: true
    start_date?: true
    end_date?: true
    created_at?: true
  }

  export type BudgetsCountAggregateInputType = {
    budget_id?: true
    user_id?: true
    name?: true
    amount?: true
    start_date?: true
    end_date?: true
    created_at?: true
    _all?: true
  }

  export type BudgetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which budgets to aggregate.
     */
    where?: budgetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of budgets to fetch.
     */
    orderBy?: budgetsOrderByWithRelationInput | budgetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: budgetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned budgets
    **/
    _count?: true | BudgetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetsMaxAggregateInputType
  }

  export type GetBudgetsAggregateType<T extends BudgetsAggregateArgs> = {
        [P in keyof T & keyof AggregateBudgets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudgets[P]>
      : GetScalarType<T[P], AggregateBudgets[P]>
  }




  export type budgetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: budgetsWhereInput
    orderBy?: budgetsOrderByWithAggregationInput | budgetsOrderByWithAggregationInput[]
    by: BudgetsScalarFieldEnum[] | BudgetsScalarFieldEnum
    having?: budgetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetsCountAggregateInputType | true
    _avg?: BudgetsAvgAggregateInputType
    _sum?: BudgetsSumAggregateInputType
    _min?: BudgetsMinAggregateInputType
    _max?: BudgetsMaxAggregateInputType
  }

  export type BudgetsGroupByOutputType = {
    budget_id: number
    user_id: number
    name: string
    amount: Decimal
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    _count: BudgetsCountAggregateOutputType | null
    _avg: BudgetsAvgAggregateOutputType | null
    _sum: BudgetsSumAggregateOutputType | null
    _min: BudgetsMinAggregateOutputType | null
    _max: BudgetsMaxAggregateOutputType | null
  }

  type GetBudgetsGroupByPayload<T extends budgetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetsGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetsGroupByOutputType[P]>
        }
      >
    >


  export type budgetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    budget_id?: boolean
    user_id?: boolean
    name?: boolean
    amount?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    transactions?: boolean | budgets$transactionsArgs<ExtArgs>
    _count?: boolean | BudgetsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budgets"]>

  export type budgetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    budget_id?: boolean
    user_id?: boolean
    name?: boolean
    amount?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budgets"]>

  export type budgetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    budget_id?: boolean
    user_id?: boolean
    name?: boolean
    amount?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budgets"]>

  export type budgetsSelectScalar = {
    budget_id?: boolean
    user_id?: boolean
    name?: boolean
    amount?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
  }

  export type budgetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"budget_id" | "user_id" | "name" | "amount" | "start_date" | "end_date" | "created_at", ExtArgs["result"]["budgets"]>
  export type budgetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    transactions?: boolean | budgets$transactionsArgs<ExtArgs>
    _count?: boolean | BudgetsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type budgetsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type budgetsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $budgetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "budgets"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      budget_id: number
      user_id: number
      name: string
      amount: Prisma.Decimal
      start_date: Date | null
      end_date: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["budgets"]>
    composites: {}
  }

  type budgetsGetPayload<S extends boolean | null | undefined | budgetsDefaultArgs> = $Result.GetResult<Prisma.$budgetsPayload, S>

  type budgetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<budgetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BudgetsCountAggregateInputType | true
    }

  export interface budgetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['budgets'], meta: { name: 'budgets' } }
    /**
     * Find zero or one Budgets that matches the filter.
     * @param {budgetsFindUniqueArgs} args - Arguments to find a Budgets
     * @example
     * // Get one Budgets
     * const budgets = await prisma.budgets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends budgetsFindUniqueArgs>(args: SelectSubset<T, budgetsFindUniqueArgs<ExtArgs>>): Prisma__budgetsClient<$Result.GetResult<Prisma.$budgetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Budgets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {budgetsFindUniqueOrThrowArgs} args - Arguments to find a Budgets
     * @example
     * // Get one Budgets
     * const budgets = await prisma.budgets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends budgetsFindUniqueOrThrowArgs>(args: SelectSubset<T, budgetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__budgetsClient<$Result.GetResult<Prisma.$budgetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetsFindFirstArgs} args - Arguments to find a Budgets
     * @example
     * // Get one Budgets
     * const budgets = await prisma.budgets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends budgetsFindFirstArgs>(args?: SelectSubset<T, budgetsFindFirstArgs<ExtArgs>>): Prisma__budgetsClient<$Result.GetResult<Prisma.$budgetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budgets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetsFindFirstOrThrowArgs} args - Arguments to find a Budgets
     * @example
     * // Get one Budgets
     * const budgets = await prisma.budgets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends budgetsFindFirstOrThrowArgs>(args?: SelectSubset<T, budgetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__budgetsClient<$Result.GetResult<Prisma.$budgetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budgets.findMany()
     * 
     * // Get first 10 Budgets
     * const budgets = await prisma.budgets.findMany({ take: 10 })
     * 
     * // Only select the `budget_id`
     * const budgetsWithBudget_idOnly = await prisma.budgets.findMany({ select: { budget_id: true } })
     * 
     */
    findMany<T extends budgetsFindManyArgs>(args?: SelectSubset<T, budgetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$budgetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Budgets.
     * @param {budgetsCreateArgs} args - Arguments to create a Budgets.
     * @example
     * // Create one Budgets
     * const Budgets = await prisma.budgets.create({
     *   data: {
     *     // ... data to create a Budgets
     *   }
     * })
     * 
     */
    create<T extends budgetsCreateArgs>(args: SelectSubset<T, budgetsCreateArgs<ExtArgs>>): Prisma__budgetsClient<$Result.GetResult<Prisma.$budgetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Budgets.
     * @param {budgetsCreateManyArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budgets = await prisma.budgets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends budgetsCreateManyArgs>(args?: SelectSubset<T, budgetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Budgets and returns the data saved in the database.
     * @param {budgetsCreateManyAndReturnArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budgets = await prisma.budgets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Budgets and only return the `budget_id`
     * const budgetsWithBudget_idOnly = await prisma.budgets.createManyAndReturn({
     *   select: { budget_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends budgetsCreateManyAndReturnArgs>(args?: SelectSubset<T, budgetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$budgetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Budgets.
     * @param {budgetsDeleteArgs} args - Arguments to delete one Budgets.
     * @example
     * // Delete one Budgets
     * const Budgets = await prisma.budgets.delete({
     *   where: {
     *     // ... filter to delete one Budgets
     *   }
     * })
     * 
     */
    delete<T extends budgetsDeleteArgs>(args: SelectSubset<T, budgetsDeleteArgs<ExtArgs>>): Prisma__budgetsClient<$Result.GetResult<Prisma.$budgetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Budgets.
     * @param {budgetsUpdateArgs} args - Arguments to update one Budgets.
     * @example
     * // Update one Budgets
     * const budgets = await prisma.budgets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends budgetsUpdateArgs>(args: SelectSubset<T, budgetsUpdateArgs<ExtArgs>>): Prisma__budgetsClient<$Result.GetResult<Prisma.$budgetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Budgets.
     * @param {budgetsDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budgets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends budgetsDeleteManyArgs>(args?: SelectSubset<T, budgetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budgets = await prisma.budgets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends budgetsUpdateManyArgs>(args: SelectSubset<T, budgetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets and returns the data updated in the database.
     * @param {budgetsUpdateManyAndReturnArgs} args - Arguments to update many Budgets.
     * @example
     * // Update many Budgets
     * const budgets = await prisma.budgets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Budgets and only return the `budget_id`
     * const budgetsWithBudget_idOnly = await prisma.budgets.updateManyAndReturn({
     *   select: { budget_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends budgetsUpdateManyAndReturnArgs>(args: SelectSubset<T, budgetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$budgetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Budgets.
     * @param {budgetsUpsertArgs} args - Arguments to update or create a Budgets.
     * @example
     * // Update or create a Budgets
     * const budgets = await prisma.budgets.upsert({
     *   create: {
     *     // ... data to create a Budgets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budgets we want to update
     *   }
     * })
     */
    upsert<T extends budgetsUpsertArgs>(args: SelectSubset<T, budgetsUpsertArgs<ExtArgs>>): Prisma__budgetsClient<$Result.GetResult<Prisma.$budgetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetsCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budgets.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
    **/
    count<T extends budgetsCountArgs>(
      args?: Subset<T, budgetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BudgetsAggregateArgs>(args: Subset<T, BudgetsAggregateArgs>): Prisma.PrismaPromise<GetBudgetsAggregateType<T>>

    /**
     * Group by Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends budgetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: budgetsGroupByArgs['orderBy'] }
        : { orderBy?: budgetsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, budgetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the budgets model
   */
  readonly fields: budgetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for budgets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__budgetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends budgets$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, budgets$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the budgets model
   */
  interface budgetsFieldRefs {
    readonly budget_id: FieldRef<"budgets", 'Int'>
    readonly user_id: FieldRef<"budgets", 'Int'>
    readonly name: FieldRef<"budgets", 'String'>
    readonly amount: FieldRef<"budgets", 'Decimal'>
    readonly start_date: FieldRef<"budgets", 'DateTime'>
    readonly end_date: FieldRef<"budgets", 'DateTime'>
    readonly created_at: FieldRef<"budgets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * budgets findUnique
   */
  export type budgetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null
    /**
     * Filter, which budgets to fetch.
     */
    where: budgetsWhereUniqueInput
  }

  /**
   * budgets findUniqueOrThrow
   */
  export type budgetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null
    /**
     * Filter, which budgets to fetch.
     */
    where: budgetsWhereUniqueInput
  }

  /**
   * budgets findFirst
   */
  export type budgetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null
    /**
     * Filter, which budgets to fetch.
     */
    where?: budgetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of budgets to fetch.
     */
    orderBy?: budgetsOrderByWithRelationInput | budgetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for budgets.
     */
    cursor?: budgetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of budgets.
     */
    distinct?: BudgetsScalarFieldEnum | BudgetsScalarFieldEnum[]
  }

  /**
   * budgets findFirstOrThrow
   */
  export type budgetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null
    /**
     * Filter, which budgets to fetch.
     */
    where?: budgetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of budgets to fetch.
     */
    orderBy?: budgetsOrderByWithRelationInput | budgetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for budgets.
     */
    cursor?: budgetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of budgets.
     */
    distinct?: BudgetsScalarFieldEnum | BudgetsScalarFieldEnum[]
  }

  /**
   * budgets findMany
   */
  export type budgetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null
    /**
     * Filter, which budgets to fetch.
     */
    where?: budgetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of budgets to fetch.
     */
    orderBy?: budgetsOrderByWithRelationInput | budgetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing budgets.
     */
    cursor?: budgetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` budgets.
     */
    skip?: number
    distinct?: BudgetsScalarFieldEnum | BudgetsScalarFieldEnum[]
  }

  /**
   * budgets create
   */
  export type budgetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null
    /**
     * The data needed to create a budgets.
     */
    data: XOR<budgetsCreateInput, budgetsUncheckedCreateInput>
  }

  /**
   * budgets createMany
   */
  export type budgetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many budgets.
     */
    data: budgetsCreateManyInput | budgetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * budgets createManyAndReturn
   */
  export type budgetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null
    /**
     * The data used to create many budgets.
     */
    data: budgetsCreateManyInput | budgetsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * budgets update
   */
  export type budgetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null
    /**
     * The data needed to update a budgets.
     */
    data: XOR<budgetsUpdateInput, budgetsUncheckedUpdateInput>
    /**
     * Choose, which budgets to update.
     */
    where: budgetsWhereUniqueInput
  }

  /**
   * budgets updateMany
   */
  export type budgetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update budgets.
     */
    data: XOR<budgetsUpdateManyMutationInput, budgetsUncheckedUpdateManyInput>
    /**
     * Filter which budgets to update
     */
    where?: budgetsWhereInput
    /**
     * Limit how many budgets to update.
     */
    limit?: number
  }

  /**
   * budgets updateManyAndReturn
   */
  export type budgetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null
    /**
     * The data used to update budgets.
     */
    data: XOR<budgetsUpdateManyMutationInput, budgetsUncheckedUpdateManyInput>
    /**
     * Filter which budgets to update
     */
    where?: budgetsWhereInput
    /**
     * Limit how many budgets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * budgets upsert
   */
  export type budgetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null
    /**
     * The filter to search for the budgets to update in case it exists.
     */
    where: budgetsWhereUniqueInput
    /**
     * In case the budgets found by the `where` argument doesn't exist, create a new budgets with this data.
     */
    create: XOR<budgetsCreateInput, budgetsUncheckedCreateInput>
    /**
     * In case the budgets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<budgetsUpdateInput, budgetsUncheckedUpdateInput>
  }

  /**
   * budgets delete
   */
  export type budgetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null
    /**
     * Filter which budgets to delete.
     */
    where: budgetsWhereUniqueInput
  }

  /**
   * budgets deleteMany
   */
  export type budgetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which budgets to delete
     */
    where?: budgetsWhereInput
    /**
     * Limit how many budgets to delete.
     */
    limit?: number
  }

  /**
   * budgets.transactions
   */
  export type budgets$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * budgets without action
   */
  export type budgetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    category_id: number | null
    user_id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    category_id: number | null
    user_id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    category_id: number | null
    user_id: number | null
    name: string | null
    type: string | null
    created_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    category_id: number | null
    user_id: number | null
    name: string | null
    type: string | null
    created_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    category_id: number
    user_id: number
    name: number
    type: number
    created_at: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    category_id?: true
    user_id?: true
  }

  export type CategoriesSumAggregateInputType = {
    category_id?: true
    user_id?: true
  }

  export type CategoriesMinAggregateInputType = {
    category_id?: true
    user_id?: true
    name?: true
    type?: true
    created_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    category_id?: true
    user_id?: true
    name?: true
    type?: true
    created_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    category_id?: true
    user_id?: true
    name?: true
    type?: true
    created_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    category_id: number
    user_id: number
    name: string
    type: string | null
    created_at: Date | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    user_id?: boolean
    name?: boolean
    type?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    transactions?: boolean | categories$transactionsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    user_id?: boolean
    name?: boolean
    type?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    user_id?: boolean
    name?: boolean
    type?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    category_id?: boolean
    user_id?: boolean
    name?: boolean
    type?: boolean
    created_at?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "user_id" | "name" | "type" | "created_at", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    transactions?: boolean | categories$transactionsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      user_id: number
      name: string
      type: string | null
      created_at: Date | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.updateManyAndReturn({
     *   select: { category_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends categories$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, categories$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly category_id: FieldRef<"categories", 'Int'>
    readonly user_id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
    readonly type: FieldRef<"categories", 'String'>
    readonly created_at: FieldRef<"categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.transactions
   */
  export type categories$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    transaction_id: number | null
    user_id: number | null
    category_id: number | null
    amount: Decimal | null
    budget_id: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    transaction_id: number | null
    user_id: number | null
    category_id: number | null
    amount: Decimal | null
    budget_id: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    transaction_id: number | null
    user_id: number | null
    category_id: number | null
    amount: Decimal | null
    description: string | null
    transaction_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    budget_id: number | null
  }

  export type TransactionsMaxAggregateOutputType = {
    transaction_id: number | null
    user_id: number | null
    category_id: number | null
    amount: Decimal | null
    description: string | null
    transaction_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    budget_id: number | null
  }

  export type TransactionsCountAggregateOutputType = {
    transaction_id: number
    user_id: number
    category_id: number
    amount: number
    description: number
    transaction_date: number
    created_at: number
    updated_at: number
    budget_id: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    transaction_id?: true
    user_id?: true
    category_id?: true
    amount?: true
    budget_id?: true
  }

  export type TransactionsSumAggregateInputType = {
    transaction_id?: true
    user_id?: true
    category_id?: true
    amount?: true
    budget_id?: true
  }

  export type TransactionsMinAggregateInputType = {
    transaction_id?: true
    user_id?: true
    category_id?: true
    amount?: true
    description?: true
    transaction_date?: true
    created_at?: true
    updated_at?: true
    budget_id?: true
  }

  export type TransactionsMaxAggregateInputType = {
    transaction_id?: true
    user_id?: true
    category_id?: true
    amount?: true
    description?: true
    transaction_date?: true
    created_at?: true
    updated_at?: true
    budget_id?: true
  }

  export type TransactionsCountAggregateInputType = {
    transaction_id?: true
    user_id?: true
    category_id?: true
    amount?: true
    description?: true
    transaction_date?: true
    created_at?: true
    updated_at?: true
    budget_id?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithAggregationInput | transactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    transaction_id: number
    user_id: number
    category_id: number
    amount: Decimal
    description: string | null
    transaction_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    budget_id: number | null
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    user_id?: boolean
    category_id?: boolean
    amount?: boolean
    description?: boolean
    transaction_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    budget_id?: boolean
    budgets?: boolean | transactions$budgetsArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    user_id?: boolean
    category_id?: boolean
    amount?: boolean
    description?: boolean
    transaction_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    budget_id?: boolean
    budgets?: boolean | transactions$budgetsArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    user_id?: boolean
    category_id?: boolean
    amount?: boolean
    description?: boolean
    transaction_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    budget_id?: boolean
    budgets?: boolean | transactions$budgetsArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectScalar = {
    transaction_id?: boolean
    user_id?: boolean
    category_id?: boolean
    amount?: boolean
    description?: boolean
    transaction_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    budget_id?: boolean
  }

  export type transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"transaction_id" | "user_id" | "category_id" | "amount" | "description" | "transaction_date" | "created_at" | "updated_at" | "budget_id", ExtArgs["result"]["transactions"]>
  export type transactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budgets?: boolean | transactions$budgetsArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type transactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budgets?: boolean | transactions$budgetsArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type transactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budgets?: boolean | transactions$budgetsArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transactions"
    objects: {
      budgets: Prisma.$budgetsPayload<ExtArgs> | null
      categories: Prisma.$categoriesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      transaction_id: number
      user_id: number
      category_id: number
      amount: Prisma.Decimal
      description: string | null
      transaction_date: Date | null
      created_at: Date | null
      updated_at: Date | null
      budget_id: number | null
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type transactionsGetPayload<S extends boolean | null | undefined | transactionsDefaultArgs> = $Result.GetResult<Prisma.$transactionsPayload, S>

  type transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transactions'], meta: { name: 'transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionsFindUniqueArgs>(args: SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionsFindFirstArgs>(args?: SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `transaction_id`
     * const transactionsWithTransaction_idOnly = await prisma.transactions.findMany({ select: { transaction_id: true } })
     * 
     */
    findMany<T extends transactionsFindManyArgs>(args?: SelectSubset<T, transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends transactionsCreateArgs>(args: SelectSubset<T, transactionsCreateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionsCreateManyArgs>(args?: SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `transaction_id`
     * const transactionsWithTransaction_idOnly = await prisma.transactions.createManyAndReturn({
     *   select: { transaction_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends transactionsDeleteArgs>(args: SelectSubset<T, transactionsDeleteArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionsUpdateArgs>(args: SelectSubset<T, transactionsUpdateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionsDeleteManyArgs>(args?: SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionsUpdateManyArgs>(args: SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `transaction_id`
     * const transactionsWithTransaction_idOnly = await prisma.transactions.updateManyAndReturn({
     *   select: { transaction_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends transactionsUpsertArgs>(args: SelectSubset<T, transactionsUpsertArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionsGroupByArgs['orderBy'] }
        : { orderBy?: transactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transactions model
   */
  readonly fields: transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    budgets<T extends transactions$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, transactions$budgetsArgs<ExtArgs>>): Prisma__budgetsClient<$Result.GetResult<Prisma.$budgetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transactions model
   */
  interface transactionsFieldRefs {
    readonly transaction_id: FieldRef<"transactions", 'Int'>
    readonly user_id: FieldRef<"transactions", 'Int'>
    readonly category_id: FieldRef<"transactions", 'Int'>
    readonly amount: FieldRef<"transactions", 'Decimal'>
    readonly description: FieldRef<"transactions", 'String'>
    readonly transaction_date: FieldRef<"transactions", 'DateTime'>
    readonly created_at: FieldRef<"transactions", 'DateTime'>
    readonly updated_at: FieldRef<"transactions", 'DateTime'>
    readonly budget_id: FieldRef<"transactions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findUniqueOrThrow
   */
  export type transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findFirstOrThrow
   */
  export type transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions create
   */
  export type transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a transactions.
     */
    data: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
  }

  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transactions createManyAndReturn
   */
  export type transactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transactions update
   */
  export type transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a transactions.
     */
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
    /**
     * Choose, which transactions to update.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transactions updateManyAndReturn
   */
  export type transactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: transactionsWhereUniqueInput
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
  }

  /**
   * transactions delete
   */
  export type transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter which transactions to delete.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transactions.budgets
   */
  export type transactions$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null
    where?: budgetsWhereInput
  }

  /**
   * transactions without action
   */
  export type transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    userid: number | null
  }

  export type UsersSumAggregateOutputType = {
    userid: number | null
  }

  export type UsersMinAggregateOutputType = {
    userid: number | null
    email: string | null
    password: string | null
    created_at: Date | null
    name: string | null
  }

  export type UsersMaxAggregateOutputType = {
    userid: number | null
    email: string | null
    password: string | null
    created_at: Date | null
    name: string | null
  }

  export type UsersCountAggregateOutputType = {
    userid: number
    email: number
    password: number
    created_at: number
    name: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    userid?: true
  }

  export type UsersSumAggregateInputType = {
    userid?: true
  }

  export type UsersMinAggregateInputType = {
    userid?: true
    email?: true
    password?: true
    created_at?: true
    name?: true
  }

  export type UsersMaxAggregateInputType = {
    userid?: true
    email?: true
    password?: true
    created_at?: true
    name?: true
  }

  export type UsersCountAggregateInputType = {
    userid?: true
    email?: true
    password?: true
    created_at?: true
    name?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userid: number
    email: string
    password: string
    created_at: Date | null
    name: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    name?: boolean
    budgets?: boolean | users$budgetsArgs<ExtArgs>
    categories?: boolean | users$categoriesArgs<ExtArgs>
    transactions?: boolean | users$transactionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    userid?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    name?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userid" | "email" | "password" | "created_at" | "name", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budgets?: boolean | users$budgetsArgs<ExtArgs>
    categories?: boolean | users$categoriesArgs<ExtArgs>
    transactions?: boolean | users$transactionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      budgets: Prisma.$budgetsPayload<ExtArgs>[]
      categories: Prisma.$categoriesPayload<ExtArgs>[]
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userid: number
      email: string
      password: string
      created_at: Date | null
      name: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userid`
     * const usersWithUseridOnly = await prisma.users.findMany({ select: { userid: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userid`
     * const usersWithUseridOnly = await prisma.users.createManyAndReturn({
     *   select: { userid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userid`
     * const usersWithUseridOnly = await prisma.users.updateManyAndReturn({
     *   select: { userid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    budgets<T extends users$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, users$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$budgetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends users$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, users$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends users$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, users$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly userid: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly name: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.budgets
   */
  export type users$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null
    where?: budgetsWhereInput
    orderBy?: budgetsOrderByWithRelationInput | budgetsOrderByWithRelationInput[]
    cursor?: budgetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetsScalarFieldEnum | BudgetsScalarFieldEnum[]
  }

  /**
   * users.categories
   */
  export type users$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    cursor?: categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * users.transactions
   */
  export type users$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BudgetsScalarFieldEnum: {
    budget_id: 'budget_id',
    user_id: 'user_id',
    name: 'name',
    amount: 'amount',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at'
  };

  export type BudgetsScalarFieldEnum = (typeof BudgetsScalarFieldEnum)[keyof typeof BudgetsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    category_id: 'category_id',
    user_id: 'user_id',
    name: 'name',
    type: 'type',
    created_at: 'created_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    transaction_id: 'transaction_id',
    user_id: 'user_id',
    category_id: 'category_id',
    amount: 'amount',
    description: 'description',
    transaction_date: 'transaction_date',
    created_at: 'created_at',
    updated_at: 'updated_at',
    budget_id: 'budget_id'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    userid: 'userid',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    name: 'name'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type budgetsWhereInput = {
    AND?: budgetsWhereInput | budgetsWhereInput[]
    OR?: budgetsWhereInput[]
    NOT?: budgetsWhereInput | budgetsWhereInput[]
    budget_id?: IntFilter<"budgets"> | number
    user_id?: IntFilter<"budgets"> | number
    name?: StringFilter<"budgets"> | string
    amount?: DecimalFilter<"budgets"> | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeNullableFilter<"budgets"> | Date | string | null
    end_date?: DateTimeNullableFilter<"budgets"> | Date | string | null
    created_at?: DateTimeNullableFilter<"budgets"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    transactions?: TransactionsListRelationFilter
  }

  export type budgetsOrderByWithRelationInput = {
    budget_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    transactions?: transactionsOrderByRelationAggregateInput
  }

  export type budgetsWhereUniqueInput = Prisma.AtLeast<{
    budget_id?: number
    user_id_name?: budgetsUser_idNameCompoundUniqueInput
    AND?: budgetsWhereInput | budgetsWhereInput[]
    OR?: budgetsWhereInput[]
    NOT?: budgetsWhereInput | budgetsWhereInput[]
    user_id?: IntFilter<"budgets"> | number
    name?: StringFilter<"budgets"> | string
    amount?: DecimalFilter<"budgets"> | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeNullableFilter<"budgets"> | Date | string | null
    end_date?: DateTimeNullableFilter<"budgets"> | Date | string | null
    created_at?: DateTimeNullableFilter<"budgets"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    transactions?: TransactionsListRelationFilter
  }, "budget_id" | "user_id_name">

  export type budgetsOrderByWithAggregationInput = {
    budget_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: budgetsCountOrderByAggregateInput
    _avg?: budgetsAvgOrderByAggregateInput
    _max?: budgetsMaxOrderByAggregateInput
    _min?: budgetsMinOrderByAggregateInput
    _sum?: budgetsSumOrderByAggregateInput
  }

  export type budgetsScalarWhereWithAggregatesInput = {
    AND?: budgetsScalarWhereWithAggregatesInput | budgetsScalarWhereWithAggregatesInput[]
    OR?: budgetsScalarWhereWithAggregatesInput[]
    NOT?: budgetsScalarWhereWithAggregatesInput | budgetsScalarWhereWithAggregatesInput[]
    budget_id?: IntWithAggregatesFilter<"budgets"> | number
    user_id?: IntWithAggregatesFilter<"budgets"> | number
    name?: StringWithAggregatesFilter<"budgets"> | string
    amount?: DecimalWithAggregatesFilter<"budgets"> | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeNullableWithAggregatesFilter<"budgets"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"budgets"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"budgets"> | Date | string | null
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    category_id?: IntFilter<"categories"> | number
    user_id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    type?: StringNullableFilter<"categories"> | string | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    transactions?: TransactionsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    category_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    transactions?: transactionsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    user_id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    type?: StringNullableFilter<"categories"> | string | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    transactions?: TransactionsListRelationFilter
  }, "category_id">

  export type categoriesOrderByWithAggregationInput = {
    category_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"categories"> | number
    user_id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
    type?: StringNullableWithAggregatesFilter<"categories"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
  }

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    transaction_id?: IntFilter<"transactions"> | number
    user_id?: IntFilter<"transactions"> | number
    category_id?: IntFilter<"transactions"> | number
    amount?: DecimalFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"transactions"> | string | null
    transaction_date?: DateTimeNullableFilter<"transactions"> | Date | string | null
    created_at?: DateTimeNullableFilter<"transactions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"transactions"> | Date | string | null
    budget_id?: IntNullableFilter<"transactions"> | number | null
    budgets?: XOR<BudgetsNullableScalarRelationFilter, budgetsWhereInput> | null
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type transactionsOrderByWithRelationInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    transaction_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    budget_id?: SortOrderInput | SortOrder
    budgets?: budgetsOrderByWithRelationInput
    categories?: categoriesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    transaction_id?: number
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    user_id?: IntFilter<"transactions"> | number
    category_id?: IntFilter<"transactions"> | number
    amount?: DecimalFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"transactions"> | string | null
    transaction_date?: DateTimeNullableFilter<"transactions"> | Date | string | null
    created_at?: DateTimeNullableFilter<"transactions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"transactions"> | Date | string | null
    budget_id?: IntNullableFilter<"transactions"> | number | null
    budgets?: XOR<BudgetsNullableScalarRelationFilter, budgetsWhereInput> | null
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "transaction_id">

  export type transactionsOrderByWithAggregationInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    transaction_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    budget_id?: SortOrderInput | SortOrder
    _count?: transactionsCountOrderByAggregateInput
    _avg?: transactionsAvgOrderByAggregateInput
    _max?: transactionsMaxOrderByAggregateInput
    _min?: transactionsMinOrderByAggregateInput
    _sum?: transactionsSumOrderByAggregateInput
  }

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    OR?: transactionsScalarWhereWithAggregatesInput[]
    NOT?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    transaction_id?: IntWithAggregatesFilter<"transactions"> | number
    user_id?: IntWithAggregatesFilter<"transactions"> | number
    category_id?: IntWithAggregatesFilter<"transactions"> | number
    amount?: DecimalWithAggregatesFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"transactions"> | string | null
    transaction_date?: DateTimeNullableWithAggregatesFilter<"transactions"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"transactions"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"transactions"> | Date | string | null
    budget_id?: IntNullableWithAggregatesFilter<"transactions"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    userid?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    name?: StringNullableFilter<"users"> | string | null
    budgets?: BudgetsListRelationFilter
    categories?: CategoriesListRelationFilter
    transactions?: TransactionsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    userid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    budgets?: budgetsOrderByRelationAggregateInput
    categories?: categoriesOrderByRelationAggregateInput
    transactions?: transactionsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    userid?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    name?: StringNullableFilter<"users"> | string | null
    budgets?: BudgetsListRelationFilter
    categories?: CategoriesListRelationFilter
    transactions?: TransactionsListRelationFilter
  }, "userid" | "email">

  export type usersOrderByWithAggregationInput = {
    userid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    userid?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type budgetsCreateInput = {
    name: string
    amount: Decimal | DecimalJsLike | number | string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutBudgetsInput
    transactions?: transactionsCreateNestedManyWithoutBudgetsInput
  }

  export type budgetsUncheckedCreateInput = {
    budget_id?: number
    user_id: number
    name: string
    amount: Decimal | DecimalJsLike | number | string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    transactions?: transactionsUncheckedCreateNestedManyWithoutBudgetsInput
  }

  export type budgetsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutBudgetsNestedInput
    transactions?: transactionsUpdateManyWithoutBudgetsNestedInput
  }

  export type budgetsUncheckedUpdateInput = {
    budget_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: transactionsUncheckedUpdateManyWithoutBudgetsNestedInput
  }

  export type budgetsCreateManyInput = {
    budget_id?: number
    user_id: number
    name: string
    amount: Decimal | DecimalJsLike | number | string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type budgetsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type budgetsUncheckedUpdateManyInput = {
    budget_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesCreateInput = {
    name: string
    type?: string | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutCategoriesInput
    transactions?: transactionsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    category_id?: number
    user_id: number
    name: string
    type?: string | null
    created_at?: Date | string | null
    transactions?: transactionsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutCategoriesNestedInput
    transactions?: transactionsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: transactionsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    category_id?: number
    user_id: number
    name: string
    type?: string | null
    created_at?: Date | string | null
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transaction_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    budgets?: budgetsCreateNestedOneWithoutTransactionsInput
    categories: categoriesCreateNestedOneWithoutTransactionsInput
    users: usersCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateInput = {
    transaction_id?: number
    user_id: number
    category_id: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transaction_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    budget_id?: number | null
  }

  export type transactionsUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budgets?: budgetsUpdateOneWithoutTransactionsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutTransactionsNestedInput
    users?: usersUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transactionsCreateManyInput = {
    transaction_id?: number
    user_id: number
    category_id: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transaction_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    budget_id?: number | null
  }

  export type transactionsUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsUncheckedUpdateManyInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    email: string
    password: string
    created_at?: Date | string | null
    name?: string | null
    budgets?: budgetsCreateNestedManyWithoutUsersInput
    categories?: categoriesCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    userid?: number
    email: string
    password: string
    created_at?: Date | string | null
    name?: string | null
    budgets?: budgetsUncheckedCreateNestedManyWithoutUsersInput
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    budgets?: budgetsUpdateManyWithoutUsersNestedInput
    categories?: categoriesUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    budgets?: budgetsUncheckedUpdateManyWithoutUsersNestedInput
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    userid?: number
    email: string
    password: string
    created_at?: Date | string | null
    name?: string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    userid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: transactionsWhereInput
    some?: transactionsWhereInput
    none?: transactionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type budgetsUser_idNameCompoundUniqueInput = {
    user_id: number
    name: string
  }

  export type budgetsCountOrderByAggregateInput = {
    budget_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type budgetsAvgOrderByAggregateInput = {
    budget_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type budgetsMaxOrderByAggregateInput = {
    budget_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type budgetsMinOrderByAggregateInput = {
    budget_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type budgetsSumOrderByAggregateInput = {
    budget_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type categoriesCountOrderByAggregateInput = {
    category_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    category_id?: SortOrder
    user_id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    category_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    category_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    category_id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BudgetsNullableScalarRelationFilter = {
    is?: budgetsWhereInput | null
    isNot?: budgetsWhereInput | null
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type transactionsCountOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    transaction_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    budget_id?: SortOrder
  }

  export type transactionsAvgOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    amount?: SortOrder
    budget_id?: SortOrder
  }

  export type transactionsMaxOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    transaction_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    budget_id?: SortOrder
  }

  export type transactionsMinOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    transaction_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    budget_id?: SortOrder
  }

  export type transactionsSumOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    amount?: SortOrder
    budget_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BudgetsListRelationFilter = {
    every?: budgetsWhereInput
    some?: budgetsWhereInput
    none?: budgetsWhereInput
  }

  export type CategoriesListRelationFilter = {
    every?: categoriesWhereInput
    some?: categoriesWhereInput
    none?: categoriesWhereInput
  }

  export type budgetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    userid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    userid?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    userid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    userid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    userid?: SortOrder
  }

  export type usersCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<usersCreateWithoutBudgetsInput, usersUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBudgetsInput
    connect?: usersWhereUniqueInput
  }

  export type transactionsCreateNestedManyWithoutBudgetsInput = {
    create?: XOR<transactionsCreateWithoutBudgetsInput, transactionsUncheckedCreateWithoutBudgetsInput> | transactionsCreateWithoutBudgetsInput[] | transactionsUncheckedCreateWithoutBudgetsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutBudgetsInput | transactionsCreateOrConnectWithoutBudgetsInput[]
    createMany?: transactionsCreateManyBudgetsInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutBudgetsInput = {
    create?: XOR<transactionsCreateWithoutBudgetsInput, transactionsUncheckedCreateWithoutBudgetsInput> | transactionsCreateWithoutBudgetsInput[] | transactionsUncheckedCreateWithoutBudgetsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutBudgetsInput | transactionsCreateOrConnectWithoutBudgetsInput[]
    createMany?: transactionsCreateManyBudgetsInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutBudgetsNestedInput = {
    create?: XOR<usersCreateWithoutBudgetsInput, usersUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBudgetsInput
    upsert?: usersUpsertWithoutBudgetsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBudgetsInput, usersUpdateWithoutBudgetsInput>, usersUncheckedUpdateWithoutBudgetsInput>
  }

  export type transactionsUpdateManyWithoutBudgetsNestedInput = {
    create?: XOR<transactionsCreateWithoutBudgetsInput, transactionsUncheckedCreateWithoutBudgetsInput> | transactionsCreateWithoutBudgetsInput[] | transactionsUncheckedCreateWithoutBudgetsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutBudgetsInput | transactionsCreateOrConnectWithoutBudgetsInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutBudgetsInput | transactionsUpsertWithWhereUniqueWithoutBudgetsInput[]
    createMany?: transactionsCreateManyBudgetsInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutBudgetsInput | transactionsUpdateWithWhereUniqueWithoutBudgetsInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutBudgetsInput | transactionsUpdateManyWithWhereWithoutBudgetsInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type transactionsUncheckedUpdateManyWithoutBudgetsNestedInput = {
    create?: XOR<transactionsCreateWithoutBudgetsInput, transactionsUncheckedCreateWithoutBudgetsInput> | transactionsCreateWithoutBudgetsInput[] | transactionsUncheckedCreateWithoutBudgetsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutBudgetsInput | transactionsCreateOrConnectWithoutBudgetsInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutBudgetsInput | transactionsUpsertWithWhereUniqueWithoutBudgetsInput[]
    createMany?: transactionsCreateManyBudgetsInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutBudgetsInput | transactionsUpdateWithWhereUniqueWithoutBudgetsInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutBudgetsInput | transactionsUpdateManyWithWhereWithoutBudgetsInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<usersCreateWithoutCategoriesInput, usersUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: usersCreateOrConnectWithoutCategoriesInput
    connect?: usersWhereUniqueInput
  }

  export type transactionsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<transactionsCreateWithoutCategoriesInput, transactionsUncheckedCreateWithoutCategoriesInput> | transactionsCreateWithoutCategoriesInput[] | transactionsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutCategoriesInput | transactionsCreateOrConnectWithoutCategoriesInput[]
    createMany?: transactionsCreateManyCategoriesInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<transactionsCreateWithoutCategoriesInput, transactionsUncheckedCreateWithoutCategoriesInput> | transactionsCreateWithoutCategoriesInput[] | transactionsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutCategoriesInput | transactionsCreateOrConnectWithoutCategoriesInput[]
    createMany?: transactionsCreateManyCategoriesInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<usersCreateWithoutCategoriesInput, usersUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: usersCreateOrConnectWithoutCategoriesInput
    upsert?: usersUpsertWithoutCategoriesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCategoriesInput, usersUpdateWithoutCategoriesInput>, usersUncheckedUpdateWithoutCategoriesInput>
  }

  export type transactionsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<transactionsCreateWithoutCategoriesInput, transactionsUncheckedCreateWithoutCategoriesInput> | transactionsCreateWithoutCategoriesInput[] | transactionsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutCategoriesInput | transactionsCreateOrConnectWithoutCategoriesInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutCategoriesInput | transactionsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: transactionsCreateManyCategoriesInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutCategoriesInput | transactionsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutCategoriesInput | transactionsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<transactionsCreateWithoutCategoriesInput, transactionsUncheckedCreateWithoutCategoriesInput> | transactionsCreateWithoutCategoriesInput[] | transactionsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutCategoriesInput | transactionsCreateOrConnectWithoutCategoriesInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutCategoriesInput | transactionsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: transactionsCreateManyCategoriesInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutCategoriesInput | transactionsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutCategoriesInput | transactionsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type budgetsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<budgetsCreateWithoutTransactionsInput, budgetsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: budgetsCreateOrConnectWithoutTransactionsInput
    connect?: budgetsWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<categoriesCreateWithoutTransactionsInput, categoriesUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutTransactionsInput
    connect?: categoriesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    connect?: usersWhereUniqueInput
  }

  export type budgetsUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<budgetsCreateWithoutTransactionsInput, budgetsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: budgetsCreateOrConnectWithoutTransactionsInput
    upsert?: budgetsUpsertWithoutTransactionsInput
    disconnect?: budgetsWhereInput | boolean
    delete?: budgetsWhereInput | boolean
    connect?: budgetsWhereUniqueInput
    update?: XOR<XOR<budgetsUpdateToOneWithWhereWithoutTransactionsInput, budgetsUpdateWithoutTransactionsInput>, budgetsUncheckedUpdateWithoutTransactionsInput>
  }

  export type categoriesUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<categoriesCreateWithoutTransactionsInput, categoriesUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutTransactionsInput
    upsert?: categoriesUpsertWithoutTransactionsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutTransactionsInput, categoriesUpdateWithoutTransactionsInput>, categoriesUncheckedUpdateWithoutTransactionsInput>
  }

  export type usersUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    upsert?: usersUpsertWithoutTransactionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTransactionsInput, usersUpdateWithoutTransactionsInput>, usersUncheckedUpdateWithoutTransactionsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type budgetsCreateNestedManyWithoutUsersInput = {
    create?: XOR<budgetsCreateWithoutUsersInput, budgetsUncheckedCreateWithoutUsersInput> | budgetsCreateWithoutUsersInput[] | budgetsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: budgetsCreateOrConnectWithoutUsersInput | budgetsCreateOrConnectWithoutUsersInput[]
    createMany?: budgetsCreateManyUsersInputEnvelope
    connect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[]
  }

  export type categoriesCreateNestedManyWithoutUsersInput = {
    create?: XOR<categoriesCreateWithoutUsersInput, categoriesUncheckedCreateWithoutUsersInput> | categoriesCreateWithoutUsersInput[] | categoriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsersInput | categoriesCreateOrConnectWithoutUsersInput[]
    createMany?: categoriesCreateManyUsersInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type transactionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type budgetsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<budgetsCreateWithoutUsersInput, budgetsUncheckedCreateWithoutUsersInput> | budgetsCreateWithoutUsersInput[] | budgetsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: budgetsCreateOrConnectWithoutUsersInput | budgetsCreateOrConnectWithoutUsersInput[]
    createMany?: budgetsCreateManyUsersInputEnvelope
    connect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[]
  }

  export type categoriesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<categoriesCreateWithoutUsersInput, categoriesUncheckedCreateWithoutUsersInput> | categoriesCreateWithoutUsersInput[] | categoriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsersInput | categoriesCreateOrConnectWithoutUsersInput[]
    createMany?: categoriesCreateManyUsersInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type budgetsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<budgetsCreateWithoutUsersInput, budgetsUncheckedCreateWithoutUsersInput> | budgetsCreateWithoutUsersInput[] | budgetsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: budgetsCreateOrConnectWithoutUsersInput | budgetsCreateOrConnectWithoutUsersInput[]
    upsert?: budgetsUpsertWithWhereUniqueWithoutUsersInput | budgetsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: budgetsCreateManyUsersInputEnvelope
    set?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[]
    disconnect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[]
    delete?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[]
    connect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[]
    update?: budgetsUpdateWithWhereUniqueWithoutUsersInput | budgetsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: budgetsUpdateManyWithWhereWithoutUsersInput | budgetsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: budgetsScalarWhereInput | budgetsScalarWhereInput[]
  }

  export type categoriesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<categoriesCreateWithoutUsersInput, categoriesUncheckedCreateWithoutUsersInput> | categoriesCreateWithoutUsersInput[] | categoriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsersInput | categoriesCreateOrConnectWithoutUsersInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutUsersInput | categoriesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: categoriesCreateManyUsersInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutUsersInput | categoriesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutUsersInput | categoriesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type transactionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutUsersInput | transactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutUsersInput | transactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutUsersInput | transactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type budgetsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<budgetsCreateWithoutUsersInput, budgetsUncheckedCreateWithoutUsersInput> | budgetsCreateWithoutUsersInput[] | budgetsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: budgetsCreateOrConnectWithoutUsersInput | budgetsCreateOrConnectWithoutUsersInput[]
    upsert?: budgetsUpsertWithWhereUniqueWithoutUsersInput | budgetsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: budgetsCreateManyUsersInputEnvelope
    set?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[]
    disconnect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[]
    delete?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[]
    connect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[]
    update?: budgetsUpdateWithWhereUniqueWithoutUsersInput | budgetsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: budgetsUpdateManyWithWhereWithoutUsersInput | budgetsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: budgetsScalarWhereInput | budgetsScalarWhereInput[]
  }

  export type categoriesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<categoriesCreateWithoutUsersInput, categoriesUncheckedCreateWithoutUsersInput> | categoriesCreateWithoutUsersInput[] | categoriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsersInput | categoriesCreateOrConnectWithoutUsersInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutUsersInput | categoriesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: categoriesCreateManyUsersInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutUsersInput | categoriesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutUsersInput | categoriesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput> | transactionsCreateWithoutUsersInput[] | transactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutUsersInput | transactionsCreateOrConnectWithoutUsersInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutUsersInput | transactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transactionsCreateManyUsersInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutUsersInput | transactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutUsersInput | transactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type usersCreateWithoutBudgetsInput = {
    email: string
    password: string
    created_at?: Date | string | null
    name?: string | null
    categories?: categoriesCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBudgetsInput = {
    userid?: number
    email: string
    password: string
    created_at?: Date | string | null
    name?: string | null
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBudgetsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBudgetsInput, usersUncheckedCreateWithoutBudgetsInput>
  }

  export type transactionsCreateWithoutBudgetsInput = {
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transaction_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    categories: categoriesCreateNestedOneWithoutTransactionsInput
    users: usersCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutBudgetsInput = {
    transaction_id?: number
    user_id: number
    category_id: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transaction_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type transactionsCreateOrConnectWithoutBudgetsInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutBudgetsInput, transactionsUncheckedCreateWithoutBudgetsInput>
  }

  export type transactionsCreateManyBudgetsInputEnvelope = {
    data: transactionsCreateManyBudgetsInput | transactionsCreateManyBudgetsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutBudgetsInput = {
    update: XOR<usersUpdateWithoutBudgetsInput, usersUncheckedUpdateWithoutBudgetsInput>
    create: XOR<usersCreateWithoutBudgetsInput, usersUncheckedCreateWithoutBudgetsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBudgetsInput, usersUncheckedUpdateWithoutBudgetsInput>
  }

  export type usersUpdateWithoutBudgetsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: categoriesUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBudgetsInput = {
    userid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type transactionsUpsertWithWhereUniqueWithoutBudgetsInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutBudgetsInput, transactionsUncheckedUpdateWithoutBudgetsInput>
    create: XOR<transactionsCreateWithoutBudgetsInput, transactionsUncheckedCreateWithoutBudgetsInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutBudgetsInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutBudgetsInput, transactionsUncheckedUpdateWithoutBudgetsInput>
  }

  export type transactionsUpdateManyWithWhereWithoutBudgetsInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutBudgetsInput>
  }

  export type transactionsScalarWhereInput = {
    AND?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    OR?: transactionsScalarWhereInput[]
    NOT?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    transaction_id?: IntFilter<"transactions"> | number
    user_id?: IntFilter<"transactions"> | number
    category_id?: IntFilter<"transactions"> | number
    amount?: DecimalFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"transactions"> | string | null
    transaction_date?: DateTimeNullableFilter<"transactions"> | Date | string | null
    created_at?: DateTimeNullableFilter<"transactions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"transactions"> | Date | string | null
    budget_id?: IntNullableFilter<"transactions"> | number | null
  }

  export type usersCreateWithoutCategoriesInput = {
    email: string
    password: string
    created_at?: Date | string | null
    name?: string | null
    budgets?: budgetsCreateNestedManyWithoutUsersInput
    transactions?: transactionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCategoriesInput = {
    userid?: number
    email: string
    password: string
    created_at?: Date | string | null
    name?: string | null
    budgets?: budgetsUncheckedCreateNestedManyWithoutUsersInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCategoriesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCategoriesInput, usersUncheckedCreateWithoutCategoriesInput>
  }

  export type transactionsCreateWithoutCategoriesInput = {
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transaction_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    budgets?: budgetsCreateNestedOneWithoutTransactionsInput
    users: usersCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutCategoriesInput = {
    transaction_id?: number
    user_id: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transaction_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    budget_id?: number | null
  }

  export type transactionsCreateOrConnectWithoutCategoriesInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutCategoriesInput, transactionsUncheckedCreateWithoutCategoriesInput>
  }

  export type transactionsCreateManyCategoriesInputEnvelope = {
    data: transactionsCreateManyCategoriesInput | transactionsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutCategoriesInput = {
    update: XOR<usersUpdateWithoutCategoriesInput, usersUncheckedUpdateWithoutCategoriesInput>
    create: XOR<usersCreateWithoutCategoriesInput, usersUncheckedCreateWithoutCategoriesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCategoriesInput, usersUncheckedUpdateWithoutCategoriesInput>
  }

  export type usersUpdateWithoutCategoriesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    budgets?: budgetsUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCategoriesInput = {
    userid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    budgets?: budgetsUncheckedUpdateManyWithoutUsersNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type transactionsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutCategoriesInput, transactionsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<transactionsCreateWithoutCategoriesInput, transactionsUncheckedCreateWithoutCategoriesInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutCategoriesInput, transactionsUncheckedUpdateWithoutCategoriesInput>
  }

  export type transactionsUpdateManyWithWhereWithoutCategoriesInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type budgetsCreateWithoutTransactionsInput = {
    name: string
    amount: Decimal | DecimalJsLike | number | string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutBudgetsInput
  }

  export type budgetsUncheckedCreateWithoutTransactionsInput = {
    budget_id?: number
    user_id: number
    name: string
    amount: Decimal | DecimalJsLike | number | string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type budgetsCreateOrConnectWithoutTransactionsInput = {
    where: budgetsWhereUniqueInput
    create: XOR<budgetsCreateWithoutTransactionsInput, budgetsUncheckedCreateWithoutTransactionsInput>
  }

  export type categoriesCreateWithoutTransactionsInput = {
    name: string
    type?: string | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutTransactionsInput = {
    category_id?: number
    user_id: number
    name: string
    type?: string | null
    created_at?: Date | string | null
  }

  export type categoriesCreateOrConnectWithoutTransactionsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutTransactionsInput, categoriesUncheckedCreateWithoutTransactionsInput>
  }

  export type usersCreateWithoutTransactionsInput = {
    email: string
    password: string
    created_at?: Date | string | null
    name?: string | null
    budgets?: budgetsCreateNestedManyWithoutUsersInput
    categories?: categoriesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTransactionsInput = {
    userid?: number
    email: string
    password: string
    created_at?: Date | string | null
    name?: string | null
    budgets?: budgetsUncheckedCreateNestedManyWithoutUsersInput
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTransactionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
  }

  export type budgetsUpsertWithoutTransactionsInput = {
    update: XOR<budgetsUpdateWithoutTransactionsInput, budgetsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<budgetsCreateWithoutTransactionsInput, budgetsUncheckedCreateWithoutTransactionsInput>
    where?: budgetsWhereInput
  }

  export type budgetsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: budgetsWhereInput
    data: XOR<budgetsUpdateWithoutTransactionsInput, budgetsUncheckedUpdateWithoutTransactionsInput>
  }

  export type budgetsUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type budgetsUncheckedUpdateWithoutTransactionsInput = {
    budget_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUpsertWithoutTransactionsInput = {
    update: XOR<categoriesUpdateWithoutTransactionsInput, categoriesUncheckedUpdateWithoutTransactionsInput>
    create: XOR<categoriesCreateWithoutTransactionsInput, categoriesUncheckedCreateWithoutTransactionsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutTransactionsInput, categoriesUncheckedUpdateWithoutTransactionsInput>
  }

  export type categoriesUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutTransactionsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutTransactionsInput = {
    update: XOR<usersUpdateWithoutTransactionsInput, usersUncheckedUpdateWithoutTransactionsInput>
    create: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTransactionsInput, usersUncheckedUpdateWithoutTransactionsInput>
  }

  export type usersUpdateWithoutTransactionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    budgets?: budgetsUpdateManyWithoutUsersNestedInput
    categories?: categoriesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTransactionsInput = {
    userid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    budgets?: budgetsUncheckedUpdateManyWithoutUsersNestedInput
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type budgetsCreateWithoutUsersInput = {
    name: string
    amount: Decimal | DecimalJsLike | number | string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    transactions?: transactionsCreateNestedManyWithoutBudgetsInput
  }

  export type budgetsUncheckedCreateWithoutUsersInput = {
    budget_id?: number
    name: string
    amount: Decimal | DecimalJsLike | number | string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    transactions?: transactionsUncheckedCreateNestedManyWithoutBudgetsInput
  }

  export type budgetsCreateOrConnectWithoutUsersInput = {
    where: budgetsWhereUniqueInput
    create: XOR<budgetsCreateWithoutUsersInput, budgetsUncheckedCreateWithoutUsersInput>
  }

  export type budgetsCreateManyUsersInputEnvelope = {
    data: budgetsCreateManyUsersInput | budgetsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutUsersInput = {
    name: string
    type?: string | null
    created_at?: Date | string | null
    transactions?: transactionsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutUsersInput = {
    category_id?: number
    name: string
    type?: string | null
    created_at?: Date | string | null
    transactions?: transactionsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutUsersInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutUsersInput, categoriesUncheckedCreateWithoutUsersInput>
  }

  export type categoriesCreateManyUsersInputEnvelope = {
    data: categoriesCreateManyUsersInput | categoriesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type transactionsCreateWithoutUsersInput = {
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transaction_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    budgets?: budgetsCreateNestedOneWithoutTransactionsInput
    categories: categoriesCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutUsersInput = {
    transaction_id?: number
    category_id: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transaction_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    budget_id?: number | null
  }

  export type transactionsCreateOrConnectWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput>
  }

  export type transactionsCreateManyUsersInputEnvelope = {
    data: transactionsCreateManyUsersInput | transactionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type budgetsUpsertWithWhereUniqueWithoutUsersInput = {
    where: budgetsWhereUniqueInput
    update: XOR<budgetsUpdateWithoutUsersInput, budgetsUncheckedUpdateWithoutUsersInput>
    create: XOR<budgetsCreateWithoutUsersInput, budgetsUncheckedCreateWithoutUsersInput>
  }

  export type budgetsUpdateWithWhereUniqueWithoutUsersInput = {
    where: budgetsWhereUniqueInput
    data: XOR<budgetsUpdateWithoutUsersInput, budgetsUncheckedUpdateWithoutUsersInput>
  }

  export type budgetsUpdateManyWithWhereWithoutUsersInput = {
    where: budgetsScalarWhereInput
    data: XOR<budgetsUpdateManyMutationInput, budgetsUncheckedUpdateManyWithoutUsersInput>
  }

  export type budgetsScalarWhereInput = {
    AND?: budgetsScalarWhereInput | budgetsScalarWhereInput[]
    OR?: budgetsScalarWhereInput[]
    NOT?: budgetsScalarWhereInput | budgetsScalarWhereInput[]
    budget_id?: IntFilter<"budgets"> | number
    user_id?: IntFilter<"budgets"> | number
    name?: StringFilter<"budgets"> | string
    amount?: DecimalFilter<"budgets"> | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeNullableFilter<"budgets"> | Date | string | null
    end_date?: DateTimeNullableFilter<"budgets"> | Date | string | null
    created_at?: DateTimeNullableFilter<"budgets"> | Date | string | null
  }

  export type categoriesUpsertWithWhereUniqueWithoutUsersInput = {
    where: categoriesWhereUniqueInput
    update: XOR<categoriesUpdateWithoutUsersInput, categoriesUncheckedUpdateWithoutUsersInput>
    create: XOR<categoriesCreateWithoutUsersInput, categoriesUncheckedCreateWithoutUsersInput>
  }

  export type categoriesUpdateWithWhereUniqueWithoutUsersInput = {
    where: categoriesWhereUniqueInput
    data: XOR<categoriesUpdateWithoutUsersInput, categoriesUncheckedUpdateWithoutUsersInput>
  }

  export type categoriesUpdateManyWithWhereWithoutUsersInput = {
    where: categoriesScalarWhereInput
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyWithoutUsersInput>
  }

  export type categoriesScalarWhereInput = {
    AND?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    OR?: categoriesScalarWhereInput[]
    NOT?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    category_id?: IntFilter<"categories"> | number
    user_id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    type?: StringNullableFilter<"categories"> | string | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
  }

  export type transactionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutUsersInput, transactionsUncheckedUpdateWithoutUsersInput>
    create: XOR<transactionsCreateWithoutUsersInput, transactionsUncheckedCreateWithoutUsersInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutUsersInput, transactionsUncheckedUpdateWithoutUsersInput>
  }

  export type transactionsUpdateManyWithWhereWithoutUsersInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type transactionsCreateManyBudgetsInput = {
    transaction_id?: number
    user_id: number
    category_id: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transaction_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type transactionsUpdateWithoutBudgetsInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: categoriesUpdateOneRequiredWithoutTransactionsNestedInput
    users?: usersUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutBudgetsInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsUncheckedUpdateManyWithoutBudgetsInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsCreateManyCategoriesInput = {
    transaction_id?: number
    user_id: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transaction_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    budget_id?: number | null
  }

  export type transactionsUpdateWithoutCategoriesInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budgets?: budgetsUpdateOneWithoutTransactionsNestedInput
    users?: usersUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutCategoriesInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transactionsUncheckedUpdateManyWithoutCategoriesInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type budgetsCreateManyUsersInput = {
    budget_id?: number
    name: string
    amount: Decimal | DecimalJsLike | number | string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type categoriesCreateManyUsersInput = {
    category_id?: number
    name: string
    type?: string | null
    created_at?: Date | string | null
  }

  export type transactionsCreateManyUsersInput = {
    transaction_id?: number
    category_id: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transaction_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    budget_id?: number | null
  }

  export type budgetsUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: transactionsUpdateManyWithoutBudgetsNestedInput
  }

  export type budgetsUncheckedUpdateWithoutUsersInput = {
    budget_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: transactionsUncheckedUpdateManyWithoutBudgetsNestedInput
  }

  export type budgetsUncheckedUpdateManyWithoutUsersInput = {
    budget_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: transactionsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutUsersInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: transactionsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateManyWithoutUsersInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsUpdateWithoutUsersInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budgets?: budgetsUpdateOneWithoutTransactionsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutUsersInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transactionsUncheckedUpdateManyWithoutUsersInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget_id?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}