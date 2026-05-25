/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Post
 *
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>;
/**
 * Model Comment
 *
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>;
/**
 * Model PostLikes
 *
 */
export type PostLikes = $Result.DefaultSelection<Prisma.$PostLikesPayload>;
/**
 * Model CommentLikes
 *
 */
export type CommentLikes =
  $Result.DefaultSelection<Prisma.$CommentLikesPayload>;
/**
 * Model Follows
 *
 */
export type Follows = $Result.DefaultSelection<Prisma.$FollowsPayload>;
/**
 * Model Notification
 *
 */
export type Notification =
  $Result.DefaultSelection<Prisma.$NotificationPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Event: {
    LIKE: 'LIKE';
    SHARE: 'SHARE';
    FOLLOW: 'FOLLOW';
    COMMENT: 'COMMENT';
  };

  export type Event = (typeof Event)[keyof typeof Event];
}

export type Event = $Enums.Event;

export const Event: typeof $Enums.Event;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Comments
   * const comments = await prisma.comment.findMany()
   * ```
   */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postLikes`: Exposes CRUD operations for the **PostLikes** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PostLikes
   * const postLikes = await prisma.postLikes.findMany()
   * ```
   */
  get postLikes(): Prisma.PostLikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentLikes`: Exposes CRUD operations for the **CommentLikes** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CommentLikes
   * const commentLikes = await prisma.commentLikes.findMany()
   * ```
   */
  get commentLikes(): Prisma.CommentLikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follows`: Exposes CRUD operations for the **Follows** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Follows
   * const follows = await prisma.follows.findMany()
   * ```
   */
  get follows(): Prisma.FollowsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Notifications
   * const notifications = await prisma.notification.findMany()
   * ```
   */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Post: 'Post';
    Comment: 'Comment';
    PostLikes: 'PostLikes';
    CommentLikes: 'CommentLikes';
    Follows: 'Follows';
    Notification: 'Notification';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'post'
        | 'comment'
        | 'postLikes'
        | 'commentLikes'
        | 'follows'
        | 'notification';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>;
        fields: Prisma.PostFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePost>;
          };
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PostGroupByOutputType>[];
          };
          count: {
            args: Prisma.PostCountArgs<ExtArgs>;
            result: $Utils.Optional<PostCountAggregateOutputType> | number;
          };
        };
      };
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>;
        fields: Prisma.CommentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateComment>;
          };
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CommentGroupByOutputType>[];
          };
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>;
            result: $Utils.Optional<CommentCountAggregateOutputType> | number;
          };
        };
      };
      PostLikes: {
        payload: Prisma.$PostLikesPayload<ExtArgs>;
        fields: Prisma.PostLikesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PostLikesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PostLikesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>;
          };
          findFirst: {
            args: Prisma.PostLikesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PostLikesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>;
          };
          findMany: {
            args: Prisma.PostLikesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>[];
          };
          create: {
            args: Prisma.PostLikesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>;
          };
          createMany: {
            args: Prisma.PostLikesCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PostLikesCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>[];
          };
          delete: {
            args: Prisma.PostLikesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>;
          };
          update: {
            args: Prisma.PostLikesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>;
          };
          deleteMany: {
            args: Prisma.PostLikesDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PostLikesUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PostLikesUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>[];
          };
          upsert: {
            args: Prisma.PostLikesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>;
          };
          aggregate: {
            args: Prisma.PostLikesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePostLikes>;
          };
          groupBy: {
            args: Prisma.PostLikesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PostLikesGroupByOutputType>[];
          };
          count: {
            args: Prisma.PostLikesCountArgs<ExtArgs>;
            result: $Utils.Optional<PostLikesCountAggregateOutputType> | number;
          };
        };
      };
      CommentLikes: {
        payload: Prisma.$CommentLikesPayload<ExtArgs>;
        fields: Prisma.CommentLikesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CommentLikesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentLikesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CommentLikesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentLikesPayload>;
          };
          findFirst: {
            args: Prisma.CommentLikesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentLikesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CommentLikesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentLikesPayload>;
          };
          findMany: {
            args: Prisma.CommentLikesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentLikesPayload>[];
          };
          create: {
            args: Prisma.CommentLikesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentLikesPayload>;
          };
          createMany: {
            args: Prisma.CommentLikesCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CommentLikesCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentLikesPayload>[];
          };
          delete: {
            args: Prisma.CommentLikesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentLikesPayload>;
          };
          update: {
            args: Prisma.CommentLikesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentLikesPayload>;
          };
          deleteMany: {
            args: Prisma.CommentLikesDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CommentLikesUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CommentLikesUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentLikesPayload>[];
          };
          upsert: {
            args: Prisma.CommentLikesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentLikesPayload>;
          };
          aggregate: {
            args: Prisma.CommentLikesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCommentLikes>;
          };
          groupBy: {
            args: Prisma.CommentLikesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CommentLikesGroupByOutputType>[];
          };
          count: {
            args: Prisma.CommentLikesCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CommentLikesCountAggregateOutputType>
              | number;
          };
        };
      };
      Follows: {
        payload: Prisma.$FollowsPayload<ExtArgs>;
        fields: Prisma.FollowsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FollowsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FollowsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>;
          };
          findFirst: {
            args: Prisma.FollowsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FollowsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>;
          };
          findMany: {
            args: Prisma.FollowsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>[];
          };
          create: {
            args: Prisma.FollowsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>;
          };
          createMany: {
            args: Prisma.FollowsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FollowsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>[];
          };
          delete: {
            args: Prisma.FollowsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>;
          };
          update: {
            args: Prisma.FollowsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>;
          };
          deleteMany: {
            args: Prisma.FollowsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FollowsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.FollowsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>[];
          };
          upsert: {
            args: Prisma.FollowsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>;
          };
          aggregate: {
            args: Prisma.FollowsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFollows>;
          };
          groupBy: {
            args: Prisma.FollowsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FollowsGroupByOutputType>[];
          };
          count: {
            args: Prisma.FollowsCountArgs<ExtArgs>;
            result: $Utils.Optional<FollowsCountAggregateOutputType> | number;
          };
        };
      };
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>;
        fields: Prisma.NotificationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
          };
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
          };
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
          };
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNotification>;
          };
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<NotificationGroupByOutputType>[];
          };
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<NotificationCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
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
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    post?: PostOmit;
    comment?: CommentOmit;
    postLikes?: PostLikesOmit;
    commentLikes?: CommentLikesOmit;
    follows?: FollowsOmit;
    notification?: NotificationOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number;
    comments: number;
    postLikes: number;
    commentLikes: number;
    followers: number;
    following: number;
    SentNotifications: number;
    ReceivedNotifications: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs;
    comments?: boolean | UserCountOutputTypeCountCommentsArgs;
    postLikes?: boolean | UserCountOutputTypeCountPostLikesArgs;
    commentLikes?: boolean | UserCountOutputTypeCountCommentLikesArgs;
    followers?: boolean | UserCountOutputTypeCountFollowersArgs;
    following?: boolean | UserCountOutputTypeCountFollowingArgs;
    SentNotifications?: boolean | UserCountOutputTypeCountSentNotificationsArgs;
    ReceivedNotifications?:
      | boolean
      | UserCountOutputTypeCountReceivedNotificationsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostLikesWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentLikesWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FollowsWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FollowsWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentNotificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedNotificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationWhereInput;
  };

  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    comments: number;
    sharedBy: number;
    likes: number;
    notifications: number;
  };

  export type PostCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    comments?: boolean | PostCountOutputTypeCountCommentsArgs;
    sharedBy?: boolean | PostCountOutputTypeCountSharedByArgs;
    likes?: boolean | PostCountOutputTypeCountLikesArgs;
    notifications?: boolean | PostCountOutputTypeCountNotificationsArgs;
  };

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountSharedByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostWhereInput;
  };

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostLikesWhereInput;
  };

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountNotificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationWhereInput;
  };

  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    likes: number;
    notifications: number;
  };

  export type CommentCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    likes?: boolean | CommentCountOutputTypeCountLikesArgs;
    notifications?: boolean | CommentCountOutputTypeCountNotificationsArgs;
  };

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentLikesWhereInput;
  };

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountNotificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    username: string | null;
    name: string | null;
    googleId: string | null;
    profilePic: string | null;
    passwordHash: string | null;
    isOnboarded: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    username: string | null;
    name: string | null;
    googleId: string | null;
    profilePic: string | null;
    passwordHash: string | null;
    isOnboarded: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    username: number;
    name: number;
    googleId: number;
    profilePic: number;
    passwordHash: number;
    isOnboarded: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    name?: true;
    googleId?: true;
    profilePic?: true;
    passwordHash?: true;
    isOnboarded?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    name?: true;
    googleId?: true;
    profilePic?: true;
    passwordHash?: true;
    isOnboarded?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    name?: true;
    googleId?: true;
    profilePic?: true;
    passwordHash?: true;
    isOnboarded?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    email: string;
    username: string;
    name: string | null;
    googleId: string | null;
    profilePic: string | null;
    passwordHash: string | null;
    isOnboarded: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      username?: boolean;
      name?: boolean;
      googleId?: boolean;
      profilePic?: boolean;
      passwordHash?: boolean;
      isOnboarded?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      posts?: boolean | User$postsArgs<ExtArgs>;
      comments?: boolean | User$commentsArgs<ExtArgs>;
      postLikes?: boolean | User$postLikesArgs<ExtArgs>;
      commentLikes?: boolean | User$commentLikesArgs<ExtArgs>;
      followers?: boolean | User$followersArgs<ExtArgs>;
      following?: boolean | User$followingArgs<ExtArgs>;
      SentNotifications?: boolean | User$SentNotificationsArgs<ExtArgs>;
      ReceivedNotifications?: boolean | User$ReceivedNotificationsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      username?: boolean;
      name?: boolean;
      googleId?: boolean;
      profilePic?: boolean;
      passwordHash?: boolean;
      isOnboarded?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      username?: boolean;
      name?: boolean;
      googleId?: boolean;
      profilePic?: boolean;
      passwordHash?: boolean;
      isOnboarded?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    username?: boolean;
    name?: boolean;
    googleId?: boolean;
    profilePic?: boolean;
    passwordHash?: boolean;
    isOnboarded?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'email'
    | 'username'
    | 'name'
    | 'googleId'
    | 'profilePic'
    | 'passwordHash'
    | 'isOnboarded'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    posts?: boolean | User$postsArgs<ExtArgs>;
    comments?: boolean | User$commentsArgs<ExtArgs>;
    postLikes?: boolean | User$postLikesArgs<ExtArgs>;
    commentLikes?: boolean | User$commentLikesArgs<ExtArgs>;
    followers?: boolean | User$followersArgs<ExtArgs>;
    following?: boolean | User$followingArgs<ExtArgs>;
    SentNotifications?: boolean | User$SentNotificationsArgs<ExtArgs>;
    ReceivedNotifications?: boolean | User$ReceivedNotificationsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[];
      comments: Prisma.$CommentPayload<ExtArgs>[];
      postLikes: Prisma.$PostLikesPayload<ExtArgs>[];
      commentLikes: Prisma.$CommentLikesPayload<ExtArgs>[];
      followers: Prisma.$FollowsPayload<ExtArgs>[];
      following: Prisma.$FollowsPayload<ExtArgs>[];
      SentNotifications: Prisma.$NotificationPayload<ExtArgs>[];
      ReceivedNotifications: Prisma.$NotificationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        email: string;
        username: string;
        name: string | null;
        googleId: string | null;
        profilePic: string | null;
        passwordHash: string | null;
        isOnboarded: boolean;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    posts<T extends User$postsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$postsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PostPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    comments<T extends User$commentsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$commentsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    postLikes<T extends User$postLikesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$postLikesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PostLikesPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    commentLikes<T extends User$commentLikesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$commentLikesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentLikesPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    followers<T extends User$followersArgs<ExtArgs> = {}>(
      args?: Subset<T, User$followersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FollowsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    following<T extends User$followingArgs<ExtArgs> = {}>(
      args?: Subset<T, User$followingArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FollowsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    SentNotifications<T extends User$SentNotificationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$SentNotificationsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NotificationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    ReceivedNotifications<
      T extends User$ReceivedNotificationsArgs<ExtArgs> = {},
    >(
      args?: Subset<T, User$ReceivedNotificationsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NotificationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'Int'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly username: FieldRef<'User', 'String'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly googleId: FieldRef<'User', 'String'>;
    readonly profilePic: FieldRef<'User', 'String'>;
    readonly passwordHash: FieldRef<'User', 'String'>;
    readonly isOnboarded: FieldRef<'User', 'Boolean'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.posts
   */
  export type User$postsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    where?: PostWhereInput;
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * User.comments
   */
  export type User$commentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * User.postLikes
   */
  export type User$postLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null;
    where?: PostLikesWhereInput;
    orderBy?:
      | PostLikesOrderByWithRelationInput
      | PostLikesOrderByWithRelationInput[];
    cursor?: PostLikesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[];
  };

  /**
   * User.commentLikes
   */
  export type User$commentLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentLikes
     */
    select?: CommentLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentLikes
     */
    omit?: CommentLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikesInclude<ExtArgs> | null;
    where?: CommentLikesWhereInput;
    orderBy?:
      | CommentLikesOrderByWithRelationInput
      | CommentLikesOrderByWithRelationInput[];
    cursor?: CommentLikesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentLikesScalarFieldEnum | CommentLikesScalarFieldEnum[];
  };

  /**
   * User.followers
   */
  export type User$followersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null;
    where?: FollowsWhereInput;
    orderBy?:
      | FollowsOrderByWithRelationInput
      | FollowsOrderByWithRelationInput[];
    cursor?: FollowsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[];
  };

  /**
   * User.following
   */
  export type User$followingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null;
    where?: FollowsWhereInput;
    orderBy?:
      | FollowsOrderByWithRelationInput
      | FollowsOrderByWithRelationInput[];
    cursor?: FollowsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[];
  };

  /**
   * User.SentNotifications
   */
  export type User$SentNotificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    where?: NotificationWhereInput;
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    cursor?: NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * User.ReceivedNotifications
   */
  export type User$ReceivedNotificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    where?: NotificationWhereInput;
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    cursor?: NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null;
    _avg: PostAvgAggregateOutputType | null;
    _sum: PostSumAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
  };

  export type PostAvgAggregateOutputType = {
    id: number | null;
    authorId: number | null;
    originalPostId: number | null;
  };

  export type PostSumAggregateOutputType = {
    id: number | null;
    authorId: number | null;
    originalPostId: number | null;
  };

  export type PostMinAggregateOutputType = {
    id: number | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: number | null;
    originalPostId: number | null;
  };

  export type PostMaxAggregateOutputType = {
    id: number | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: number | null;
    originalPostId: number | null;
  };

  export type PostCountAggregateOutputType = {
    id: number;
    content: number;
    createdAt: number;
    updatedAt: number;
    authorId: number;
    originalPostId: number;
    _all: number;
  };

  export type PostAvgAggregateInputType = {
    id?: true;
    authorId?: true;
    originalPostId?: true;
  };

  export type PostSumAggregateInputType = {
    id?: true;
    authorId?: true;
    originalPostId?: true;
  };

  export type PostMinAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    originalPostId?: true;
  };

  export type PostMaxAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    originalPostId?: true;
  };

  export type PostCountAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    originalPostId?: true;
    _all?: true;
  };

  export type PostAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Posts
     **/
    _count?: true | PostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PostAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PostSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PostMaxAggregateInputType;
  };

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
    [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>;
  };

  export type PostGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostWhereInput;
    orderBy?:
      | PostOrderByWithAggregationInput
      | PostOrderByWithAggregationInput[];
    by: PostScalarFieldEnum[] | PostScalarFieldEnum;
    having?: PostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostCountAggregateInputType | true;
    _avg?: PostAvgAggregateInputType;
    _sum?: PostSumAggregateInputType;
    _min?: PostMinAggregateInputType;
    _max?: PostMaxAggregateInputType;
  };

  export type PostGroupByOutputType = {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    authorId: number;
    originalPostId: number | null;
    _count: PostCountAggregateOutputType | null;
    _avg: PostAvgAggregateOutputType | null;
    _sum: PostSumAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
  };

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PostGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PostGroupByOutputType[P]>
          : GetScalarType<T[P], PostGroupByOutputType[P]>;
      }
    >
  >;

  export type PostSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      originalPostId?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      comments?: boolean | Post$commentsArgs<ExtArgs>;
      originalPost?: boolean | Post$originalPostArgs<ExtArgs>;
      sharedBy?: boolean | Post$sharedByArgs<ExtArgs>;
      likes?: boolean | Post$likesArgs<ExtArgs>;
      notifications?: boolean | Post$notificationsArgs<ExtArgs>;
      _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['post']
  >;

  export type PostSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      originalPostId?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      originalPost?: boolean | Post$originalPostArgs<ExtArgs>;
    },
    ExtArgs['result']['post']
  >;

  export type PostSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      originalPostId?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      originalPost?: boolean | Post$originalPostArgs<ExtArgs>;
    },
    ExtArgs['result']['post']
  >;

  export type PostSelectScalar = {
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    originalPostId?: boolean;
  };

  export type PostOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'content'
    | 'createdAt'
    | 'updatedAt'
    | 'authorId'
    | 'originalPostId',
    ExtArgs['result']['post']
  >;
  export type PostInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    comments?: boolean | Post$commentsArgs<ExtArgs>;
    originalPost?: boolean | Post$originalPostArgs<ExtArgs>;
    sharedBy?: boolean | Post$sharedByArgs<ExtArgs>;
    likes?: boolean | Post$likesArgs<ExtArgs>;
    notifications?: boolean | Post$notificationsArgs<ExtArgs>;
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type PostIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    originalPost?: boolean | Post$originalPostArgs<ExtArgs>;
  };
  export type PostIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    originalPost?: boolean | Post$originalPostArgs<ExtArgs>;
  };

  export type $PostPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Post';
    objects: {
      author: Prisma.$UserPayload<ExtArgs>;
      comments: Prisma.$CommentPayload<ExtArgs>[];
      originalPost: Prisma.$PostPayload<ExtArgs> | null;
      sharedBy: Prisma.$PostPayload<ExtArgs>[];
      likes: Prisma.$PostLikesPayload<ExtArgs>[];
      notifications: Prisma.$NotificationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
        originalPostId: number | null;
      },
      ExtArgs['result']['post']
    >;
    composites: {};
  };

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> =
    $Result.GetResult<Prisma.$PostPayload, S>;

  type PostCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PostCountAggregateInputType | true;
  };

  export interface PostDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Post'];
      meta: { name: 'Post' };
    };
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     *
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     *
     */
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     *
     */
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
     **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(
      args: Subset<T, PostAggregateArgs>
    ): Prisma.PrismaPromise<GetPostAggregateType<T>>;

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetPostGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Post model
     */
    readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$commentsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    originalPost<T extends Post$originalPostArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$originalPostArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    sharedBy<T extends Post$sharedByArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$sharedByArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PostPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    likes<T extends Post$likesArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$likesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PostLikesPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    notifications<T extends Post$notificationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$notificationsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NotificationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<'Post', 'Int'>;
    readonly content: FieldRef<'Post', 'String'>;
    readonly createdAt: FieldRef<'Post', 'DateTime'>;
    readonly updatedAt: FieldRef<'Post', 'DateTime'>;
    readonly authorId: FieldRef<'Post', 'Int'>;
    readonly originalPostId: FieldRef<'Post', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post findMany
   */
  export type PostFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post create
   */
  export type PostCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>;
  };

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Post update
   */
  export type PostUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
  };

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Post upsert
   */
  export type PostUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput;
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>;
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
  };

  /**
   * Post delete
   */
  export type PostDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to delete.
     */
    limit?: number;
  };

  /**
   * Post.comments
   */
  export type Post$commentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Post.originalPost
   */
  export type Post$originalPostArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    where?: PostWhereInput;
  };

  /**
   * Post.sharedBy
   */
  export type Post$sharedByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    where?: PostWhereInput;
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post.likes
   */
  export type Post$likesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null;
    where?: PostLikesWhereInput;
    orderBy?:
      | PostLikesOrderByWithRelationInput
      | PostLikesOrderByWithRelationInput[];
    cursor?: PostLikesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[];
  };

  /**
   * Post.notifications
   */
  export type Post$notificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    where?: NotificationWhereInput;
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    cursor?: NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Post without action
   */
  export type PostDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
  };

  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null;
    _avg: CommentAvgAggregateOutputType | null;
    _sum: CommentSumAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
  };

  export type CommentAvgAggregateOutputType = {
    id: number | null;
    authorId: number | null;
    postId: number | null;
  };

  export type CommentSumAggregateOutputType = {
    id: number | null;
    authorId: number | null;
    postId: number | null;
  };

  export type CommentMinAggregateOutputType = {
    id: number | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: number | null;
    postId: number | null;
  };

  export type CommentMaxAggregateOutputType = {
    id: number | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: number | null;
    postId: number | null;
  };

  export type CommentCountAggregateOutputType = {
    id: number;
    content: number;
    createdAt: number;
    updatedAt: number;
    authorId: number;
    postId: number;
    _all: number;
  };

  export type CommentAvgAggregateInputType = {
    id?: true;
    authorId?: true;
    postId?: true;
  };

  export type CommentSumAggregateInputType = {
    id?: true;
    authorId?: true;
    postId?: true;
  };

  export type CommentMinAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    postId?: true;
  };

  export type CommentMaxAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    postId?: true;
  };

  export type CommentCountAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    postId?: true;
    _all?: true;
  };

  export type CommentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Comments
     **/
    _count?: true | CommentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CommentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CommentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CommentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CommentMaxAggregateInputType;
  };

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
    [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>;
  };

  export type CommentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithAggregationInput
      | CommentOrderByWithAggregationInput[];
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum;
    having?: CommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentCountAggregateInputType | true;
    _avg?: CommentAvgAggregateInputType;
    _sum?: CommentSumAggregateInputType;
    _min?: CommentMinAggregateInputType;
    _max?: CommentMaxAggregateInputType;
  };

  export type CommentGroupByOutputType = {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    authorId: number;
    postId: number;
    _count: CommentCountAggregateOutputType | null;
    _avg: CommentAvgAggregateOutputType | null;
    _sum: CommentSumAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
  };

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CommentGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CommentGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>;
        }
      >
    >;

  export type CommentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      postId?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      likes?: boolean | Comment$likesArgs<ExtArgs>;
      notifications?: boolean | Comment$notificationsArgs<ExtArgs>;
      _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['comment']
  >;

  export type CommentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      postId?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      post?: boolean | PostDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['comment']
  >;

  export type CommentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      postId?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      post?: boolean | PostDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['comment']
  >;

  export type CommentSelectScalar = {
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    postId?: boolean;
  };

  export type CommentOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'content' | 'createdAt' | 'updatedAt' | 'authorId' | 'postId',
    ExtArgs['result']['comment']
  >;
  export type CommentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    post?: boolean | PostDefaultArgs<ExtArgs>;
    likes?: boolean | Comment$likesArgs<ExtArgs>;
    notifications?: boolean | Comment$notificationsArgs<ExtArgs>;
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CommentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    post?: boolean | PostDefaultArgs<ExtArgs>;
  };
  export type CommentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    post?: boolean | PostDefaultArgs<ExtArgs>;
  };

  export type $CommentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Comment';
    objects: {
      author: Prisma.$UserPayload<ExtArgs>;
      post: Prisma.$PostPayload<ExtArgs>;
      likes: Prisma.$CommentLikesPayload<ExtArgs>[];
      notifications: Prisma.$NotificationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
        postId: number;
      },
      ExtArgs['result']['comment']
    >;
    composites: {};
  };

  type CommentGetPayload<
    S extends boolean | null | undefined | CommentDefaultArgs,
  > = $Result.GetResult<Prisma.$CommentPayload, S>;

  type CommentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommentCountAggregateInputType | true;
  };

  export interface CommentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Comment'];
      meta: { name: 'Comment' };
    };
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     *
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     *
     */
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     *
     */
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
     **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(
      args: Subset<T, CommentAggregateArgs>
    ): Prisma.PrismaPromise<GetCommentAggregateType<T>>;

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetCommentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Comment model
     */
    readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    post<T extends PostDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PostDefaultArgs<ExtArgs>>
    ): Prisma__PostClient<
      | $Result.GetResult<
          Prisma.$PostPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    likes<T extends Comment$likesArgs<ExtArgs> = {}>(
      args?: Subset<T, Comment$likesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentLikesPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    notifications<T extends Comment$notificationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Comment$notificationsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NotificationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<'Comment', 'Int'>;
    readonly content: FieldRef<'Comment', 'String'>;
    readonly createdAt: FieldRef<'Comment', 'DateTime'>;
    readonly updatedAt: FieldRef<'Comment', 'DateTime'>;
    readonly authorId: FieldRef<'Comment', 'Int'>;
    readonly postId: FieldRef<'Comment', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment create
   */
  export type CommentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>;
  };

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Comment update
   */
  export type CommentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>;
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>;
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to update.
     */
    limit?: number;
  };

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>;
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput;
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>;
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>;
  };

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to delete.
     */
    limit?: number;
  };

  /**
   * Comment.likes
   */
  export type Comment$likesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentLikes
     */
    select?: CommentLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentLikes
     */
    omit?: CommentLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikesInclude<ExtArgs> | null;
    where?: CommentLikesWhereInput;
    orderBy?:
      | CommentLikesOrderByWithRelationInput
      | CommentLikesOrderByWithRelationInput[];
    cursor?: CommentLikesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentLikesScalarFieldEnum | CommentLikesScalarFieldEnum[];
  };

  /**
   * Comment.notifications
   */
  export type Comment$notificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    where?: NotificationWhereInput;
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    cursor?: NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
  };

  /**
   * Model PostLikes
   */

  export type AggregatePostLikes = {
    _count: PostLikesCountAggregateOutputType | null;
    _avg: PostLikesAvgAggregateOutputType | null;
    _sum: PostLikesSumAggregateOutputType | null;
    _min: PostLikesMinAggregateOutputType | null;
    _max: PostLikesMaxAggregateOutputType | null;
  };

  export type PostLikesAvgAggregateOutputType = {
    userId: number | null;
    postId: number | null;
  };

  export type PostLikesSumAggregateOutputType = {
    userId: number | null;
    postId: number | null;
  };

  export type PostLikesMinAggregateOutputType = {
    createdAt: Date | null;
    userId: number | null;
    postId: number | null;
  };

  export type PostLikesMaxAggregateOutputType = {
    createdAt: Date | null;
    userId: number | null;
    postId: number | null;
  };

  export type PostLikesCountAggregateOutputType = {
    createdAt: number;
    userId: number;
    postId: number;
    _all: number;
  };

  export type PostLikesAvgAggregateInputType = {
    userId?: true;
    postId?: true;
  };

  export type PostLikesSumAggregateInputType = {
    userId?: true;
    postId?: true;
  };

  export type PostLikesMinAggregateInputType = {
    createdAt?: true;
    userId?: true;
    postId?: true;
  };

  export type PostLikesMaxAggregateInputType = {
    createdAt?: true;
    userId?: true;
    postId?: true;
  };

  export type PostLikesCountAggregateInputType = {
    createdAt?: true;
    userId?: true;
    postId?: true;
    _all?: true;
  };

  export type PostLikesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PostLikes to aggregate.
     */
    where?: PostLikesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostLikes to fetch.
     */
    orderBy?:
      | PostLikesOrderByWithRelationInput
      | PostLikesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PostLikesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostLikes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PostLikes
     **/
    _count?: true | PostLikesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PostLikesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PostLikesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PostLikesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PostLikesMaxAggregateInputType;
  };

  export type GetPostLikesAggregateType<T extends PostLikesAggregateArgs> = {
    [P in keyof T & keyof AggregatePostLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostLikes[P]>
      : GetScalarType<T[P], AggregatePostLikes[P]>;
  };

  export type PostLikesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostLikesWhereInput;
    orderBy?:
      | PostLikesOrderByWithAggregationInput
      | PostLikesOrderByWithAggregationInput[];
    by: PostLikesScalarFieldEnum[] | PostLikesScalarFieldEnum;
    having?: PostLikesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostLikesCountAggregateInputType | true;
    _avg?: PostLikesAvgAggregateInputType;
    _sum?: PostLikesSumAggregateInputType;
    _min?: PostLikesMinAggregateInputType;
    _max?: PostLikesMaxAggregateInputType;
  };

  export type PostLikesGroupByOutputType = {
    createdAt: Date;
    userId: number;
    postId: number;
    _count: PostLikesCountAggregateOutputType | null;
    _avg: PostLikesAvgAggregateOutputType | null;
    _sum: PostLikesSumAggregateOutputType | null;
    _min: PostLikesMinAggregateOutputType | null;
    _max: PostLikesMaxAggregateOutputType | null;
  };

  type GetPostLikesGroupByPayload<T extends PostLikesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PostLikesGroupByOutputType, T['by']> & {
          [P in keyof T & keyof PostLikesGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostLikesGroupByOutputType[P]>
            : GetScalarType<T[P], PostLikesGroupByOutputType[P]>;
        }
      >
    >;

  export type PostLikesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      createdAt?: boolean;
      userId?: boolean;
      postId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      post?: boolean | PostDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['postLikes']
  >;

  export type PostLikesSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      createdAt?: boolean;
      userId?: boolean;
      postId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      post?: boolean | PostDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['postLikes']
  >;

  export type PostLikesSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      createdAt?: boolean;
      userId?: boolean;
      postId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      post?: boolean | PostDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['postLikes']
  >;

  export type PostLikesSelectScalar = {
    createdAt?: boolean;
    userId?: boolean;
    postId?: boolean;
  };

  export type PostLikesOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'createdAt' | 'userId' | 'postId',
    ExtArgs['result']['postLikes']
  >;
  export type PostLikesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    post?: boolean | PostDefaultArgs<ExtArgs>;
  };
  export type PostLikesIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    post?: boolean | PostDefaultArgs<ExtArgs>;
  };
  export type PostLikesIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    post?: boolean | PostDefaultArgs<ExtArgs>;
  };

  export type $PostLikesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'PostLikes';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      post: Prisma.$PostPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        createdAt: Date;
        userId: number;
        postId: number;
      },
      ExtArgs['result']['postLikes']
    >;
    composites: {};
  };

  type PostLikesGetPayload<
    S extends boolean | null | undefined | PostLikesDefaultArgs,
  > = $Result.GetResult<Prisma.$PostLikesPayload, S>;

  type PostLikesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    PostLikesFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: PostLikesCountAggregateInputType | true;
  };

  export interface PostLikesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['PostLikes'];
      meta: { name: 'PostLikes' };
    };
    /**
     * Find zero or one PostLikes that matches the filter.
     * @param {PostLikesFindUniqueArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostLikesFindUniqueArgs>(
      args: SelectSubset<T, PostLikesFindUniqueArgs<ExtArgs>>
    ): Prisma__PostLikesClient<
      $Result.GetResult<
        Prisma.$PostLikesPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one PostLikes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostLikesFindUniqueOrThrowArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostLikesFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PostLikesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostLikesClient<
      $Result.GetResult<
        Prisma.$PostLikesPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PostLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesFindFirstArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostLikesFindFirstArgs>(
      args?: SelectSubset<T, PostLikesFindFirstArgs<ExtArgs>>
    ): Prisma__PostLikesClient<
      $Result.GetResult<
        Prisma.$PostLikesPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PostLikes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesFindFirstOrThrowArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostLikesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostLikesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostLikesClient<
      $Result.GetResult<
        Prisma.$PostLikesPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more PostLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostLikes
     * const postLikes = await prisma.postLikes.findMany()
     *
     * // Get first 10 PostLikes
     * const postLikes = await prisma.postLikes.findMany({ take: 10 })
     *
     * // Only select the `createdAt`
     * const postLikesWithCreatedAtOnly = await prisma.postLikes.findMany({ select: { createdAt: true } })
     *
     */
    findMany<T extends PostLikesFindManyArgs>(
      args?: SelectSubset<T, PostLikesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostLikesPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a PostLikes.
     * @param {PostLikesCreateArgs} args - Arguments to create a PostLikes.
     * @example
     * // Create one PostLikes
     * const PostLikes = await prisma.postLikes.create({
     *   data: {
     *     // ... data to create a PostLikes
     *   }
     * })
     *
     */
    create<T extends PostLikesCreateArgs>(
      args: SelectSubset<T, PostLikesCreateArgs<ExtArgs>>
    ): Prisma__PostLikesClient<
      $Result.GetResult<
        Prisma.$PostLikesPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many PostLikes.
     * @param {PostLikesCreateManyArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLikes = await prisma.postLikes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PostLikesCreateManyArgs>(
      args?: SelectSubset<T, PostLikesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many PostLikes and returns the data saved in the database.
     * @param {PostLikesCreateManyAndReturnArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLikes = await prisma.postLikes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PostLikes and only return the `createdAt`
     * const postLikesWithCreatedAtOnly = await prisma.postLikes.createManyAndReturn({
     *   select: { createdAt: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PostLikesCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PostLikesCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostLikesPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a PostLikes.
     * @param {PostLikesDeleteArgs} args - Arguments to delete one PostLikes.
     * @example
     * // Delete one PostLikes
     * const PostLikes = await prisma.postLikes.delete({
     *   where: {
     *     // ... filter to delete one PostLikes
     *   }
     * })
     *
     */
    delete<T extends PostLikesDeleteArgs>(
      args: SelectSubset<T, PostLikesDeleteArgs<ExtArgs>>
    ): Prisma__PostLikesClient<
      $Result.GetResult<
        Prisma.$PostLikesPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one PostLikes.
     * @param {PostLikesUpdateArgs} args - Arguments to update one PostLikes.
     * @example
     * // Update one PostLikes
     * const postLikes = await prisma.postLikes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PostLikesUpdateArgs>(
      args: SelectSubset<T, PostLikesUpdateArgs<ExtArgs>>
    ): Prisma__PostLikesClient<
      $Result.GetResult<
        Prisma.$PostLikesPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more PostLikes.
     * @param {PostLikesDeleteManyArgs} args - Arguments to filter PostLikes to delete.
     * @example
     * // Delete a few PostLikes
     * const { count } = await prisma.postLikes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PostLikesDeleteManyArgs>(
      args?: SelectSubset<T, PostLikesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostLikes
     * const postLikes = await prisma.postLikes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PostLikesUpdateManyArgs>(
      args: SelectSubset<T, PostLikesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PostLikes and returns the data updated in the database.
     * @param {PostLikesUpdateManyAndReturnArgs} args - Arguments to update many PostLikes.
     * @example
     * // Update many PostLikes
     * const postLikes = await prisma.postLikes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PostLikes and only return the `createdAt`
     * const postLikesWithCreatedAtOnly = await prisma.postLikes.updateManyAndReturn({
     *   select: { createdAt: true },
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
    updateManyAndReturn<T extends PostLikesUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PostLikesUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostLikesPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one PostLikes.
     * @param {PostLikesUpsertArgs} args - Arguments to update or create a PostLikes.
     * @example
     * // Update or create a PostLikes
     * const postLikes = await prisma.postLikes.upsert({
     *   create: {
     *     // ... data to create a PostLikes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostLikes we want to update
     *   }
     * })
     */
    upsert<T extends PostLikesUpsertArgs>(
      args: SelectSubset<T, PostLikesUpsertArgs<ExtArgs>>
    ): Prisma__PostLikesClient<
      $Result.GetResult<
        Prisma.$PostLikesPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesCountArgs} args - Arguments to filter PostLikes to count.
     * @example
     * // Count the number of PostLikes
     * const count = await prisma.postLikes.count({
     *   where: {
     *     // ... the filter for the PostLikes we want to count
     *   }
     * })
     **/
    count<T extends PostLikesCountArgs>(
      args?: Subset<T, PostLikesCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostLikesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostLikesAggregateArgs>(
      args: Subset<T, PostLikesAggregateArgs>
    ): Prisma.PrismaPromise<GetPostLikesAggregateType<T>>;

    /**
     * Group by PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesGroupByArgs} args - Group by arguments.
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
      T extends PostLikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostLikesGroupByArgs['orderBy'] }
        : { orderBy?: PostLikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PostLikesGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetPostLikesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PostLikes model
     */
    readonly fields: PostLikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostLikes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostLikesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    post<T extends PostDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PostDefaultArgs<ExtArgs>>
    ): Prisma__PostClient<
      | $Result.GetResult<
          Prisma.$PostPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PostLikes model
   */
  interface PostLikesFieldRefs {
    readonly createdAt: FieldRef<'PostLikes', 'DateTime'>;
    readonly userId: FieldRef<'PostLikes', 'Int'>;
    readonly postId: FieldRef<'PostLikes', 'Int'>;
  }

  // Custom InputTypes
  /**
   * PostLikes findUnique
   */
  export type PostLikesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null;
    /**
     * Filter, which PostLikes to fetch.
     */
    where: PostLikesWhereUniqueInput;
  };

  /**
   * PostLikes findUniqueOrThrow
   */
  export type PostLikesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null;
    /**
     * Filter, which PostLikes to fetch.
     */
    where: PostLikesWhereUniqueInput;
  };

  /**
   * PostLikes findFirst
   */
  export type PostLikesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null;
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostLikes to fetch.
     */
    orderBy?:
      | PostLikesOrderByWithRelationInput
      | PostLikesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostLikes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[];
  };

  /**
   * PostLikes findFirstOrThrow
   */
  export type PostLikesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null;
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostLikes to fetch.
     */
    orderBy?:
      | PostLikesOrderByWithRelationInput
      | PostLikesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostLikes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[];
  };

  /**
   * PostLikes findMany
   */
  export type PostLikesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null;
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostLikes to fetch.
     */
    orderBy?:
      | PostLikesOrderByWithRelationInput
      | PostLikesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PostLikes.
     */
    cursor?: PostLikesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostLikes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[];
  };

  /**
   * PostLikes create
   */
  export type PostLikesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null;
    /**
     * The data needed to create a PostLikes.
     */
    data: XOR<PostLikesCreateInput, PostLikesUncheckedCreateInput>;
  };

  /**
   * PostLikes createMany
   */
  export type PostLikesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikesCreateManyInput | PostLikesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PostLikes createManyAndReturn
   */
  export type PostLikesCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null;
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikesCreateManyInput | PostLikesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PostLikes update
   */
  export type PostLikesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null;
    /**
     * The data needed to update a PostLikes.
     */
    data: XOR<PostLikesUpdateInput, PostLikesUncheckedUpdateInput>;
    /**
     * Choose, which PostLikes to update.
     */
    where: PostLikesWhereUniqueInput;
  };

  /**
   * PostLikes updateMany
   */
  export type PostLikesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PostLikes.
     */
    data: XOR<
      PostLikesUpdateManyMutationInput,
      PostLikesUncheckedUpdateManyInput
    >;
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikesWhereInput;
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number;
  };

  /**
   * PostLikes updateManyAndReturn
   */
  export type PostLikesUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null;
    /**
     * The data used to update PostLikes.
     */
    data: XOR<
      PostLikesUpdateManyMutationInput,
      PostLikesUncheckedUpdateManyInput
    >;
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikesWhereInput;
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PostLikes upsert
   */
  export type PostLikesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null;
    /**
     * The filter to search for the PostLikes to update in case it exists.
     */
    where: PostLikesWhereUniqueInput;
    /**
     * In case the PostLikes found by the `where` argument doesn't exist, create a new PostLikes with this data.
     */
    create: XOR<PostLikesCreateInput, PostLikesUncheckedCreateInput>;
    /**
     * In case the PostLikes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostLikesUpdateInput, PostLikesUncheckedUpdateInput>;
  };

  /**
   * PostLikes delete
   */
  export type PostLikesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null;
    /**
     * Filter which PostLikes to delete.
     */
    where: PostLikesWhereUniqueInput;
  };

  /**
   * PostLikes deleteMany
   */
  export type PostLikesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PostLikes to delete
     */
    where?: PostLikesWhereInput;
    /**
     * Limit how many PostLikes to delete.
     */
    limit?: number;
  };

  /**
   * PostLikes without action
   */
  export type PostLikesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null;
  };

  /**
   * Model CommentLikes
   */

  export type AggregateCommentLikes = {
    _count: CommentLikesCountAggregateOutputType | null;
    _avg: CommentLikesAvgAggregateOutputType | null;
    _sum: CommentLikesSumAggregateOutputType | null;
    _min: CommentLikesMinAggregateOutputType | null;
    _max: CommentLikesMaxAggregateOutputType | null;
  };

  export type CommentLikesAvgAggregateOutputType = {
    userId: number | null;
    commentId: number | null;
  };

  export type CommentLikesSumAggregateOutputType = {
    userId: number | null;
    commentId: number | null;
  };

  export type CommentLikesMinAggregateOutputType = {
    createdAt: Date | null;
    userId: number | null;
    commentId: number | null;
  };

  export type CommentLikesMaxAggregateOutputType = {
    createdAt: Date | null;
    userId: number | null;
    commentId: number | null;
  };

  export type CommentLikesCountAggregateOutputType = {
    createdAt: number;
    userId: number;
    commentId: number;
    _all: number;
  };

  export type CommentLikesAvgAggregateInputType = {
    userId?: true;
    commentId?: true;
  };

  export type CommentLikesSumAggregateInputType = {
    userId?: true;
    commentId?: true;
  };

  export type CommentLikesMinAggregateInputType = {
    createdAt?: true;
    userId?: true;
    commentId?: true;
  };

  export type CommentLikesMaxAggregateInputType = {
    createdAt?: true;
    userId?: true;
    commentId?: true;
  };

  export type CommentLikesCountAggregateInputType = {
    createdAt?: true;
    userId?: true;
    commentId?: true;
    _all?: true;
  };

  export type CommentLikesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CommentLikes to aggregate.
     */
    where?: CommentLikesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommentLikes to fetch.
     */
    orderBy?:
      | CommentLikesOrderByWithRelationInput
      | CommentLikesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CommentLikesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommentLikes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommentLikes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CommentLikes
     **/
    _count?: true | CommentLikesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CommentLikesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CommentLikesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CommentLikesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CommentLikesMaxAggregateInputType;
  };

  export type GetCommentLikesAggregateType<
    T extends CommentLikesAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateCommentLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentLikes[P]>
      : GetScalarType<T[P], AggregateCommentLikes[P]>;
  };

  export type CommentLikesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentLikesWhereInput;
    orderBy?:
      | CommentLikesOrderByWithAggregationInput
      | CommentLikesOrderByWithAggregationInput[];
    by: CommentLikesScalarFieldEnum[] | CommentLikesScalarFieldEnum;
    having?: CommentLikesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentLikesCountAggregateInputType | true;
    _avg?: CommentLikesAvgAggregateInputType;
    _sum?: CommentLikesSumAggregateInputType;
    _min?: CommentLikesMinAggregateInputType;
    _max?: CommentLikesMaxAggregateInputType;
  };

  export type CommentLikesGroupByOutputType = {
    createdAt: Date;
    userId: number;
    commentId: number;
    _count: CommentLikesCountAggregateOutputType | null;
    _avg: CommentLikesAvgAggregateOutputType | null;
    _sum: CommentLikesSumAggregateOutputType | null;
    _min: CommentLikesMinAggregateOutputType | null;
    _max: CommentLikesMaxAggregateOutputType | null;
  };

  type GetCommentLikesGroupByPayload<T extends CommentLikesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CommentLikesGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof CommentLikesGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentLikesGroupByOutputType[P]>
            : GetScalarType<T[P], CommentLikesGroupByOutputType[P]>;
        }
      >
    >;

  export type CommentLikesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      createdAt?: boolean;
      userId?: boolean;
      commentId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      comment?: boolean | CommentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['commentLikes']
  >;

  export type CommentLikesSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      createdAt?: boolean;
      userId?: boolean;
      commentId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      comment?: boolean | CommentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['commentLikes']
  >;

  export type CommentLikesSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      createdAt?: boolean;
      userId?: boolean;
      commentId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      comment?: boolean | CommentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['commentLikes']
  >;

  export type CommentLikesSelectScalar = {
    createdAt?: boolean;
    userId?: boolean;
    commentId?: boolean;
  };

  export type CommentLikesOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'createdAt' | 'userId' | 'commentId',
    ExtArgs['result']['commentLikes']
  >;
  export type CommentLikesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    comment?: boolean | CommentDefaultArgs<ExtArgs>;
  };
  export type CommentLikesIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    comment?: boolean | CommentDefaultArgs<ExtArgs>;
  };
  export type CommentLikesIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    comment?: boolean | CommentDefaultArgs<ExtArgs>;
  };

  export type $CommentLikesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'CommentLikes';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      comment: Prisma.$CommentPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        createdAt: Date;
        userId: number;
        commentId: number;
      },
      ExtArgs['result']['commentLikes']
    >;
    composites: {};
  };

  type CommentLikesGetPayload<
    S extends boolean | null | undefined | CommentLikesDefaultArgs,
  > = $Result.GetResult<Prisma.$CommentLikesPayload, S>;

  type CommentLikesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CommentLikesFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CommentLikesCountAggregateInputType | true;
  };

  export interface CommentLikesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['CommentLikes'];
      meta: { name: 'CommentLikes' };
    };
    /**
     * Find zero or one CommentLikes that matches the filter.
     * @param {CommentLikesFindUniqueArgs} args - Arguments to find a CommentLikes
     * @example
     * // Get one CommentLikes
     * const commentLikes = await prisma.commentLikes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentLikesFindUniqueArgs>(
      args: SelectSubset<T, CommentLikesFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentLikesClient<
      $Result.GetResult<
        Prisma.$CommentLikesPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CommentLikes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentLikesFindUniqueOrThrowArgs} args - Arguments to find a CommentLikes
     * @example
     * // Get one CommentLikes
     * const commentLikes = await prisma.commentLikes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentLikesFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CommentLikesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentLikesClient<
      $Result.GetResult<
        Prisma.$CommentLikesPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CommentLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikesFindFirstArgs} args - Arguments to find a CommentLikes
     * @example
     * // Get one CommentLikes
     * const commentLikes = await prisma.commentLikes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentLikesFindFirstArgs>(
      args?: SelectSubset<T, CommentLikesFindFirstArgs<ExtArgs>>
    ): Prisma__CommentLikesClient<
      $Result.GetResult<
        Prisma.$CommentLikesPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CommentLikes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikesFindFirstOrThrowArgs} args - Arguments to find a CommentLikes
     * @example
     * // Get one CommentLikes
     * const commentLikes = await prisma.commentLikes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentLikesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommentLikesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentLikesClient<
      $Result.GetResult<
        Prisma.$CommentLikesPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CommentLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentLikes
     * const commentLikes = await prisma.commentLikes.findMany()
     *
     * // Get first 10 CommentLikes
     * const commentLikes = await prisma.commentLikes.findMany({ take: 10 })
     *
     * // Only select the `createdAt`
     * const commentLikesWithCreatedAtOnly = await prisma.commentLikes.findMany({ select: { createdAt: true } })
     *
     */
    findMany<T extends CommentLikesFindManyArgs>(
      args?: SelectSubset<T, CommentLikesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentLikesPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CommentLikes.
     * @param {CommentLikesCreateArgs} args - Arguments to create a CommentLikes.
     * @example
     * // Create one CommentLikes
     * const CommentLikes = await prisma.commentLikes.create({
     *   data: {
     *     // ... data to create a CommentLikes
     *   }
     * })
     *
     */
    create<T extends CommentLikesCreateArgs>(
      args: SelectSubset<T, CommentLikesCreateArgs<ExtArgs>>
    ): Prisma__CommentLikesClient<
      $Result.GetResult<
        Prisma.$CommentLikesPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CommentLikes.
     * @param {CommentLikesCreateManyArgs} args - Arguments to create many CommentLikes.
     * @example
     * // Create many CommentLikes
     * const commentLikes = await prisma.commentLikes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommentLikesCreateManyArgs>(
      args?: SelectSubset<T, CommentLikesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CommentLikes and returns the data saved in the database.
     * @param {CommentLikesCreateManyAndReturnArgs} args - Arguments to create many CommentLikes.
     * @example
     * // Create many CommentLikes
     * const commentLikes = await prisma.commentLikes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CommentLikes and only return the `createdAt`
     * const commentLikesWithCreatedAtOnly = await prisma.commentLikes.createManyAndReturn({
     *   select: { createdAt: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CommentLikesCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CommentLikesCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentLikesPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CommentLikes.
     * @param {CommentLikesDeleteArgs} args - Arguments to delete one CommentLikes.
     * @example
     * // Delete one CommentLikes
     * const CommentLikes = await prisma.commentLikes.delete({
     *   where: {
     *     // ... filter to delete one CommentLikes
     *   }
     * })
     *
     */
    delete<T extends CommentLikesDeleteArgs>(
      args: SelectSubset<T, CommentLikesDeleteArgs<ExtArgs>>
    ): Prisma__CommentLikesClient<
      $Result.GetResult<
        Prisma.$CommentLikesPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CommentLikes.
     * @param {CommentLikesUpdateArgs} args - Arguments to update one CommentLikes.
     * @example
     * // Update one CommentLikes
     * const commentLikes = await prisma.commentLikes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommentLikesUpdateArgs>(
      args: SelectSubset<T, CommentLikesUpdateArgs<ExtArgs>>
    ): Prisma__CommentLikesClient<
      $Result.GetResult<
        Prisma.$CommentLikesPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CommentLikes.
     * @param {CommentLikesDeleteManyArgs} args - Arguments to filter CommentLikes to delete.
     * @example
     * // Delete a few CommentLikes
     * const { count } = await prisma.commentLikes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommentLikesDeleteManyArgs>(
      args?: SelectSubset<T, CommentLikesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CommentLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentLikes
     * const commentLikes = await prisma.commentLikes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommentLikesUpdateManyArgs>(
      args: SelectSubset<T, CommentLikesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CommentLikes and returns the data updated in the database.
     * @param {CommentLikesUpdateManyAndReturnArgs} args - Arguments to update many CommentLikes.
     * @example
     * // Update many CommentLikes
     * const commentLikes = await prisma.commentLikes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CommentLikes and only return the `createdAt`
     * const commentLikesWithCreatedAtOnly = await prisma.commentLikes.updateManyAndReturn({
     *   select: { createdAt: true },
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
    updateManyAndReturn<T extends CommentLikesUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CommentLikesUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentLikesPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CommentLikes.
     * @param {CommentLikesUpsertArgs} args - Arguments to update or create a CommentLikes.
     * @example
     * // Update or create a CommentLikes
     * const commentLikes = await prisma.commentLikes.upsert({
     *   create: {
     *     // ... data to create a CommentLikes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentLikes we want to update
     *   }
     * })
     */
    upsert<T extends CommentLikesUpsertArgs>(
      args: SelectSubset<T, CommentLikesUpsertArgs<ExtArgs>>
    ): Prisma__CommentLikesClient<
      $Result.GetResult<
        Prisma.$CommentLikesPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CommentLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikesCountArgs} args - Arguments to filter CommentLikes to count.
     * @example
     * // Count the number of CommentLikes
     * const count = await prisma.commentLikes.count({
     *   where: {
     *     // ... the filter for the CommentLikes we want to count
     *   }
     * })
     **/
    count<T extends CommentLikesCountArgs>(
      args?: Subset<T, CommentLikesCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentLikesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CommentLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentLikesAggregateArgs>(
      args: Subset<T, CommentLikesAggregateArgs>
    ): Prisma.PrismaPromise<GetCommentLikesAggregateType<T>>;

    /**
     * Group by CommentLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikesGroupByArgs} args - Group by arguments.
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
      T extends CommentLikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentLikesGroupByArgs['orderBy'] }
        : { orderBy?: CommentLikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CommentLikesGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetCommentLikesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CommentLikes model
     */
    readonly fields: CommentLikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentLikes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentLikesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    comment<T extends CommentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CommentDefaultArgs<ExtArgs>>
    ): Prisma__CommentClient<
      | $Result.GetResult<
          Prisma.$CommentPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CommentLikes model
   */
  interface CommentLikesFieldRefs {
    readonly createdAt: FieldRef<'CommentLikes', 'DateTime'>;
    readonly userId: FieldRef<'CommentLikes', 'Int'>;
    readonly commentId: FieldRef<'CommentLikes', 'Int'>;
  }

  // Custom InputTypes
  /**
   * CommentLikes findUnique
   */
  export type CommentLikesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentLikes
     */
    select?: CommentLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentLikes
     */
    omit?: CommentLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikesInclude<ExtArgs> | null;
    /**
     * Filter, which CommentLikes to fetch.
     */
    where: CommentLikesWhereUniqueInput;
  };

  /**
   * CommentLikes findUniqueOrThrow
   */
  export type CommentLikesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentLikes
     */
    select?: CommentLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentLikes
     */
    omit?: CommentLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikesInclude<ExtArgs> | null;
    /**
     * Filter, which CommentLikes to fetch.
     */
    where: CommentLikesWhereUniqueInput;
  };

  /**
   * CommentLikes findFirst
   */
  export type CommentLikesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentLikes
     */
    select?: CommentLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentLikes
     */
    omit?: CommentLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikesInclude<ExtArgs> | null;
    /**
     * Filter, which CommentLikes to fetch.
     */
    where?: CommentLikesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommentLikes to fetch.
     */
    orderBy?:
      | CommentLikesOrderByWithRelationInput
      | CommentLikesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CommentLikes.
     */
    cursor?: CommentLikesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommentLikes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommentLikes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommentLikes.
     */
    distinct?: CommentLikesScalarFieldEnum | CommentLikesScalarFieldEnum[];
  };

  /**
   * CommentLikes findFirstOrThrow
   */
  export type CommentLikesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentLikes
     */
    select?: CommentLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentLikes
     */
    omit?: CommentLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikesInclude<ExtArgs> | null;
    /**
     * Filter, which CommentLikes to fetch.
     */
    where?: CommentLikesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommentLikes to fetch.
     */
    orderBy?:
      | CommentLikesOrderByWithRelationInput
      | CommentLikesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CommentLikes.
     */
    cursor?: CommentLikesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommentLikes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommentLikes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommentLikes.
     */
    distinct?: CommentLikesScalarFieldEnum | CommentLikesScalarFieldEnum[];
  };

  /**
   * CommentLikes findMany
   */
  export type CommentLikesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentLikes
     */
    select?: CommentLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentLikes
     */
    omit?: CommentLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikesInclude<ExtArgs> | null;
    /**
     * Filter, which CommentLikes to fetch.
     */
    where?: CommentLikesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommentLikes to fetch.
     */
    orderBy?:
      | CommentLikesOrderByWithRelationInput
      | CommentLikesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CommentLikes.
     */
    cursor?: CommentLikesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommentLikes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommentLikes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommentLikes.
     */
    distinct?: CommentLikesScalarFieldEnum | CommentLikesScalarFieldEnum[];
  };

  /**
   * CommentLikes create
   */
  export type CommentLikesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentLikes
     */
    select?: CommentLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentLikes
     */
    omit?: CommentLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikesInclude<ExtArgs> | null;
    /**
     * The data needed to create a CommentLikes.
     */
    data: XOR<CommentLikesCreateInput, CommentLikesUncheckedCreateInput>;
  };

  /**
   * CommentLikes createMany
   */
  export type CommentLikesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CommentLikes.
     */
    data: CommentLikesCreateManyInput | CommentLikesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CommentLikes createManyAndReturn
   */
  export type CommentLikesCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentLikes
     */
    select?: CommentLikesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentLikes
     */
    omit?: CommentLikesOmit<ExtArgs> | null;
    /**
     * The data used to create many CommentLikes.
     */
    data: CommentLikesCreateManyInput | CommentLikesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikesIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CommentLikes update
   */
  export type CommentLikesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentLikes
     */
    select?: CommentLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentLikes
     */
    omit?: CommentLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikesInclude<ExtArgs> | null;
    /**
     * The data needed to update a CommentLikes.
     */
    data: XOR<CommentLikesUpdateInput, CommentLikesUncheckedUpdateInput>;
    /**
     * Choose, which CommentLikes to update.
     */
    where: CommentLikesWhereUniqueInput;
  };

  /**
   * CommentLikes updateMany
   */
  export type CommentLikesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CommentLikes.
     */
    data: XOR<
      CommentLikesUpdateManyMutationInput,
      CommentLikesUncheckedUpdateManyInput
    >;
    /**
     * Filter which CommentLikes to update
     */
    where?: CommentLikesWhereInput;
    /**
     * Limit how many CommentLikes to update.
     */
    limit?: number;
  };

  /**
   * CommentLikes updateManyAndReturn
   */
  export type CommentLikesUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentLikes
     */
    select?: CommentLikesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentLikes
     */
    omit?: CommentLikesOmit<ExtArgs> | null;
    /**
     * The data used to update CommentLikes.
     */
    data: XOR<
      CommentLikesUpdateManyMutationInput,
      CommentLikesUncheckedUpdateManyInput
    >;
    /**
     * Filter which CommentLikes to update
     */
    where?: CommentLikesWhereInput;
    /**
     * Limit how many CommentLikes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikesIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CommentLikes upsert
   */
  export type CommentLikesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentLikes
     */
    select?: CommentLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentLikes
     */
    omit?: CommentLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikesInclude<ExtArgs> | null;
    /**
     * The filter to search for the CommentLikes to update in case it exists.
     */
    where: CommentLikesWhereUniqueInput;
    /**
     * In case the CommentLikes found by the `where` argument doesn't exist, create a new CommentLikes with this data.
     */
    create: XOR<CommentLikesCreateInput, CommentLikesUncheckedCreateInput>;
    /**
     * In case the CommentLikes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentLikesUpdateInput, CommentLikesUncheckedUpdateInput>;
  };

  /**
   * CommentLikes delete
   */
  export type CommentLikesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentLikes
     */
    select?: CommentLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentLikes
     */
    omit?: CommentLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikesInclude<ExtArgs> | null;
    /**
     * Filter which CommentLikes to delete.
     */
    where: CommentLikesWhereUniqueInput;
  };

  /**
   * CommentLikes deleteMany
   */
  export type CommentLikesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CommentLikes to delete
     */
    where?: CommentLikesWhereInput;
    /**
     * Limit how many CommentLikes to delete.
     */
    limit?: number;
  };

  /**
   * CommentLikes without action
   */
  export type CommentLikesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentLikes
     */
    select?: CommentLikesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentLikes
     */
    omit?: CommentLikesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikesInclude<ExtArgs> | null;
  };

  /**
   * Model Follows
   */

  export type AggregateFollows = {
    _count: FollowsCountAggregateOutputType | null;
    _avg: FollowsAvgAggregateOutputType | null;
    _sum: FollowsSumAggregateOutputType | null;
    _min: FollowsMinAggregateOutputType | null;
    _max: FollowsMaxAggregateOutputType | null;
  };

  export type FollowsAvgAggregateOutputType = {
    followingUserId: number | null;
    followedUserId: number | null;
  };

  export type FollowsSumAggregateOutputType = {
    followingUserId: number | null;
    followedUserId: number | null;
  };

  export type FollowsMinAggregateOutputType = {
    createdAt: Date | null;
    followingUserId: number | null;
    followedUserId: number | null;
  };

  export type FollowsMaxAggregateOutputType = {
    createdAt: Date | null;
    followingUserId: number | null;
    followedUserId: number | null;
  };

  export type FollowsCountAggregateOutputType = {
    createdAt: number;
    followingUserId: number;
    followedUserId: number;
    _all: number;
  };

  export type FollowsAvgAggregateInputType = {
    followingUserId?: true;
    followedUserId?: true;
  };

  export type FollowsSumAggregateInputType = {
    followingUserId?: true;
    followedUserId?: true;
  };

  export type FollowsMinAggregateInputType = {
    createdAt?: true;
    followingUserId?: true;
    followedUserId?: true;
  };

  export type FollowsMaxAggregateInputType = {
    createdAt?: true;
    followingUserId?: true;
    followedUserId?: true;
  };

  export type FollowsCountAggregateInputType = {
    createdAt?: true;
    followingUserId?: true;
    followedUserId?: true;
    _all?: true;
  };

  export type FollowsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Follows to aggregate.
     */
    where?: FollowsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Follows to fetch.
     */
    orderBy?:
      | FollowsOrderByWithRelationInput
      | FollowsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FollowsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Follows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Follows
     **/
    _count?: true | FollowsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FollowsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FollowsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FollowsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FollowsMaxAggregateInputType;
  };

  export type GetFollowsAggregateType<T extends FollowsAggregateArgs> = {
    [P in keyof T & keyof AggregateFollows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollows[P]>
      : GetScalarType<T[P], AggregateFollows[P]>;
  };

  export type FollowsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FollowsWhereInput;
    orderBy?:
      | FollowsOrderByWithAggregationInput
      | FollowsOrderByWithAggregationInput[];
    by: FollowsScalarFieldEnum[] | FollowsScalarFieldEnum;
    having?: FollowsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FollowsCountAggregateInputType | true;
    _avg?: FollowsAvgAggregateInputType;
    _sum?: FollowsSumAggregateInputType;
    _min?: FollowsMinAggregateInputType;
    _max?: FollowsMaxAggregateInputType;
  };

  export type FollowsGroupByOutputType = {
    createdAt: Date;
    followingUserId: number;
    followedUserId: number;
    _count: FollowsCountAggregateOutputType | null;
    _avg: FollowsAvgAggregateOutputType | null;
    _sum: FollowsSumAggregateOutputType | null;
    _min: FollowsMinAggregateOutputType | null;
    _max: FollowsMaxAggregateOutputType | null;
  };

  type GetFollowsGroupByPayload<T extends FollowsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<FollowsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof FollowsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowsGroupByOutputType[P]>
            : GetScalarType<T[P], FollowsGroupByOutputType[P]>;
        }
      >
    >;

  export type FollowsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      createdAt?: boolean;
      followingUserId?: boolean;
      followedUserId?: boolean;
      followingUser?: boolean | UserDefaultArgs<ExtArgs>;
      followedUser?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['follows']
  >;

  export type FollowsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      createdAt?: boolean;
      followingUserId?: boolean;
      followedUserId?: boolean;
      followingUser?: boolean | UserDefaultArgs<ExtArgs>;
      followedUser?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['follows']
  >;

  export type FollowsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      createdAt?: boolean;
      followingUserId?: boolean;
      followedUserId?: boolean;
      followingUser?: boolean | UserDefaultArgs<ExtArgs>;
      followedUser?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['follows']
  >;

  export type FollowsSelectScalar = {
    createdAt?: boolean;
    followingUserId?: boolean;
    followedUserId?: boolean;
  };

  export type FollowsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'createdAt' | 'followingUserId' | 'followedUserId',
    ExtArgs['result']['follows']
  >;
  export type FollowsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    followingUser?: boolean | UserDefaultArgs<ExtArgs>;
    followedUser?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type FollowsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    followingUser?: boolean | UserDefaultArgs<ExtArgs>;
    followedUser?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type FollowsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    followingUser?: boolean | UserDefaultArgs<ExtArgs>;
    followedUser?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $FollowsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Follows';
    objects: {
      followingUser: Prisma.$UserPayload<ExtArgs>;
      followedUser: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        createdAt: Date;
        followingUserId: number;
        followedUserId: number;
      },
      ExtArgs['result']['follows']
    >;
    composites: {};
  };

  type FollowsGetPayload<
    S extends boolean | null | undefined | FollowsDefaultArgs,
  > = $Result.GetResult<Prisma.$FollowsPayload, S>;

  type FollowsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<FollowsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FollowsCountAggregateInputType | true;
  };

  export interface FollowsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Follows'];
      meta: { name: 'Follows' };
    };
    /**
     * Find zero or one Follows that matches the filter.
     * @param {FollowsFindUniqueArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowsFindUniqueArgs>(
      args: SelectSubset<T, FollowsFindUniqueArgs<ExtArgs>>
    ): Prisma__FollowsClient<
      $Result.GetResult<
        Prisma.$FollowsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Follows that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowsFindUniqueOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FollowsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FollowsClient<
      $Result.GetResult<
        Prisma.$FollowsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindFirstArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowsFindFirstArgs>(
      args?: SelectSubset<T, FollowsFindFirstArgs<ExtArgs>>
    ): Prisma__FollowsClient<
      $Result.GetResult<
        Prisma.$FollowsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Follows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindFirstOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FollowsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FollowsClient<
      $Result.GetResult<
        Prisma.$FollowsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follows.findMany()
     *
     * // Get first 10 Follows
     * const follows = await prisma.follows.findMany({ take: 10 })
     *
     * // Only select the `createdAt`
     * const followsWithCreatedAtOnly = await prisma.follows.findMany({ select: { createdAt: true } })
     *
     */
    findMany<T extends FollowsFindManyArgs>(
      args?: SelectSubset<T, FollowsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FollowsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Follows.
     * @param {FollowsCreateArgs} args - Arguments to create a Follows.
     * @example
     * // Create one Follows
     * const Follows = await prisma.follows.create({
     *   data: {
     *     // ... data to create a Follows
     *   }
     * })
     *
     */
    create<T extends FollowsCreateArgs>(
      args: SelectSubset<T, FollowsCreateArgs<ExtArgs>>
    ): Prisma__FollowsClient<
      $Result.GetResult<
        Prisma.$FollowsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Follows.
     * @param {FollowsCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follows = await prisma.follows.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FollowsCreateManyArgs>(
      args?: SelectSubset<T, FollowsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Follows and returns the data saved in the database.
     * @param {FollowsCreateManyAndReturnArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follows = await prisma.follows.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Follows and only return the `createdAt`
     * const followsWithCreatedAtOnly = await prisma.follows.createManyAndReturn({
     *   select: { createdAt: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FollowsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, FollowsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FollowsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Follows.
     * @param {FollowsDeleteArgs} args - Arguments to delete one Follows.
     * @example
     * // Delete one Follows
     * const Follows = await prisma.follows.delete({
     *   where: {
     *     // ... filter to delete one Follows
     *   }
     * })
     *
     */
    delete<T extends FollowsDeleteArgs>(
      args: SelectSubset<T, FollowsDeleteArgs<ExtArgs>>
    ): Prisma__FollowsClient<
      $Result.GetResult<
        Prisma.$FollowsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Follows.
     * @param {FollowsUpdateArgs} args - Arguments to update one Follows.
     * @example
     * // Update one Follows
     * const follows = await prisma.follows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FollowsUpdateArgs>(
      args: SelectSubset<T, FollowsUpdateArgs<ExtArgs>>
    ): Prisma__FollowsClient<
      $Result.GetResult<
        Prisma.$FollowsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Follows.
     * @param {FollowsDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FollowsDeleteManyArgs>(
      args?: SelectSubset<T, FollowsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follows = await prisma.follows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FollowsUpdateManyArgs>(
      args: SelectSubset<T, FollowsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Follows and returns the data updated in the database.
     * @param {FollowsUpdateManyAndReturnArgs} args - Arguments to update many Follows.
     * @example
     * // Update many Follows
     * const follows = await prisma.follows.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Follows and only return the `createdAt`
     * const followsWithCreatedAtOnly = await prisma.follows.updateManyAndReturn({
     *   select: { createdAt: true },
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
    updateManyAndReturn<T extends FollowsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, FollowsUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FollowsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Follows.
     * @param {FollowsUpsertArgs} args - Arguments to update or create a Follows.
     * @example
     * // Update or create a Follows
     * const follows = await prisma.follows.upsert({
     *   create: {
     *     // ... data to create a Follows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follows we want to update
     *   }
     * })
     */
    upsert<T extends FollowsUpsertArgs>(
      args: SelectSubset<T, FollowsUpsertArgs<ExtArgs>>
    ): Prisma__FollowsClient<
      $Result.GetResult<
        Prisma.$FollowsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follows.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
     **/
    count<T extends FollowsCountArgs>(
      args?: Subset<T, FollowsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowsAggregateArgs>(
      args: Subset<T, FollowsAggregateArgs>
    ): Prisma.PrismaPromise<GetFollowsAggregateType<T>>;

    /**
     * Group by Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsGroupByArgs} args - Group by arguments.
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
      T extends FollowsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowsGroupByArgs['orderBy'] }
        : { orderBy?: FollowsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FollowsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetFollowsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Follows model
     */
    readonly fields: FollowsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    followingUser<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    followedUser<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Follows model
   */
  interface FollowsFieldRefs {
    readonly createdAt: FieldRef<'Follows', 'DateTime'>;
    readonly followingUserId: FieldRef<'Follows', 'Int'>;
    readonly followedUserId: FieldRef<'Follows', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Follows findUnique
   */
  export type FollowsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null;
    /**
     * Filter, which Follows to fetch.
     */
    where: FollowsWhereUniqueInput;
  };

  /**
   * Follows findUniqueOrThrow
   */
  export type FollowsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null;
    /**
     * Filter, which Follows to fetch.
     */
    where: FollowsWhereUniqueInput;
  };

  /**
   * Follows findFirst
   */
  export type FollowsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null;
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Follows to fetch.
     */
    orderBy?:
      | FollowsOrderByWithRelationInput
      | FollowsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Follows.
     */
    cursor?: FollowsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Follows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[];
  };

  /**
   * Follows findFirstOrThrow
   */
  export type FollowsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null;
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Follows to fetch.
     */
    orderBy?:
      | FollowsOrderByWithRelationInput
      | FollowsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Follows.
     */
    cursor?: FollowsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Follows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[];
  };

  /**
   * Follows findMany
   */
  export type FollowsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null;
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Follows to fetch.
     */
    orderBy?:
      | FollowsOrderByWithRelationInput
      | FollowsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Follows.
     */
    cursor?: FollowsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Follows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[];
  };

  /**
   * Follows create
   */
  export type FollowsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Follows.
     */
    data: XOR<FollowsCreateInput, FollowsUncheckedCreateInput>;
  };

  /**
   * Follows createMany
   */
  export type FollowsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Follows.
     */
    data: FollowsCreateManyInput | FollowsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Follows createManyAndReturn
   */
  export type FollowsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null;
    /**
     * The data used to create many Follows.
     */
    data: FollowsCreateManyInput | FollowsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Follows update
   */
  export type FollowsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Follows.
     */
    data: XOR<FollowsUpdateInput, FollowsUncheckedUpdateInput>;
    /**
     * Choose, which Follows to update.
     */
    where: FollowsWhereUniqueInput;
  };

  /**
   * Follows updateMany
   */
  export type FollowsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyInput>;
    /**
     * Filter which Follows to update
     */
    where?: FollowsWhereInput;
    /**
     * Limit how many Follows to update.
     */
    limit?: number;
  };

  /**
   * Follows updateManyAndReturn
   */
  export type FollowsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null;
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyInput>;
    /**
     * Filter which Follows to update
     */
    where?: FollowsWhereInput;
    /**
     * Limit how many Follows to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Follows upsert
   */
  export type FollowsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Follows to update in case it exists.
     */
    where: FollowsWhereUniqueInput;
    /**
     * In case the Follows found by the `where` argument doesn't exist, create a new Follows with this data.
     */
    create: XOR<FollowsCreateInput, FollowsUncheckedCreateInput>;
    /**
     * In case the Follows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowsUpdateInput, FollowsUncheckedUpdateInput>;
  };

  /**
   * Follows delete
   */
  export type FollowsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null;
    /**
     * Filter which Follows to delete.
     */
    where: FollowsWhereUniqueInput;
  };

  /**
   * Follows deleteMany
   */
  export type FollowsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowsWhereInput;
    /**
     * Limit how many Follows to delete.
     */
    limit?: number;
  };

  /**
   * Follows without action
   */
  export type FollowsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null;
  };

  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null;
    _avg: NotificationAvgAggregateOutputType | null;
    _sum: NotificationSumAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
  };

  export type NotificationAvgAggregateOutputType = {
    id: number | null;
    recipientId: number | null;
    actorId: number | null;
    postId: number | null;
    commentId: number | null;
  };

  export type NotificationSumAggregateOutputType = {
    id: number | null;
    recipientId: number | null;
    actorId: number | null;
    postId: number | null;
    commentId: number | null;
  };

  export type NotificationMinAggregateOutputType = {
    id: number | null;
    createdAt: Date | null;
    isRead: boolean | null;
    recipientId: number | null;
    actorId: number | null;
    type: $Enums.Event | null;
    postId: number | null;
    commentId: number | null;
  };

  export type NotificationMaxAggregateOutputType = {
    id: number | null;
    createdAt: Date | null;
    isRead: boolean | null;
    recipientId: number | null;
    actorId: number | null;
    type: $Enums.Event | null;
    postId: number | null;
    commentId: number | null;
  };

  export type NotificationCountAggregateOutputType = {
    id: number;
    createdAt: number;
    isRead: number;
    recipientId: number;
    actorId: number;
    type: number;
    postId: number;
    commentId: number;
    _all: number;
  };

  export type NotificationAvgAggregateInputType = {
    id?: true;
    recipientId?: true;
    actorId?: true;
    postId?: true;
    commentId?: true;
  };

  export type NotificationSumAggregateInputType = {
    id?: true;
    recipientId?: true;
    actorId?: true;
    postId?: true;
    commentId?: true;
  };

  export type NotificationMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    isRead?: true;
    recipientId?: true;
    actorId?: true;
    type?: true;
    postId?: true;
    commentId?: true;
  };

  export type NotificationMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    isRead?: true;
    recipientId?: true;
    actorId?: true;
    type?: true;
    postId?: true;
    commentId?: true;
  };

  export type NotificationCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    isRead?: true;
    recipientId?: true;
    actorId?: true;
    type?: true;
    postId?: true;
    commentId?: true;
    _all?: true;
  };

  export type NotificationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Notifications
     **/
    _count?: true | NotificationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: NotificationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: NotificationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: NotificationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: NotificationMaxAggregateInputType;
  };

  export type GetNotificationAggregateType<
    T extends NotificationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>;
  };

  export type NotificationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationWhereInput;
    orderBy?:
      | NotificationOrderByWithAggregationInput
      | NotificationOrderByWithAggregationInput[];
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum;
    having?: NotificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationCountAggregateInputType | true;
    _avg?: NotificationAvgAggregateInputType;
    _sum?: NotificationSumAggregateInputType;
    _min?: NotificationMinAggregateInputType;
    _max?: NotificationMaxAggregateInputType;
  };

  export type NotificationGroupByOutputType = {
    id: number;
    createdAt: Date;
    isRead: boolean;
    recipientId: number;
    actorId: number;
    type: $Enums.Event;
    postId: number | null;
    commentId: number | null;
    _count: NotificationCountAggregateOutputType | null;
    _avg: NotificationAvgAggregateOutputType | null;
    _sum: NotificationSumAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
  };

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<NotificationGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof NotificationGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>;
        }
      >
    >;

  export type NotificationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      isRead?: boolean;
      recipientId?: boolean;
      actorId?: boolean;
      type?: boolean;
      postId?: boolean;
      commentId?: boolean;
      recipient?: boolean | UserDefaultArgs<ExtArgs>;
      actor?: boolean | UserDefaultArgs<ExtArgs>;
      post?: boolean | Notification$postArgs<ExtArgs>;
      comment?: boolean | Notification$commentArgs<ExtArgs>;
    },
    ExtArgs['result']['notification']
  >;

  export type NotificationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      isRead?: boolean;
      recipientId?: boolean;
      actorId?: boolean;
      type?: boolean;
      postId?: boolean;
      commentId?: boolean;
      recipient?: boolean | UserDefaultArgs<ExtArgs>;
      actor?: boolean | UserDefaultArgs<ExtArgs>;
      post?: boolean | Notification$postArgs<ExtArgs>;
      comment?: boolean | Notification$commentArgs<ExtArgs>;
    },
    ExtArgs['result']['notification']
  >;

  export type NotificationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      isRead?: boolean;
      recipientId?: boolean;
      actorId?: boolean;
      type?: boolean;
      postId?: boolean;
      commentId?: boolean;
      recipient?: boolean | UserDefaultArgs<ExtArgs>;
      actor?: boolean | UserDefaultArgs<ExtArgs>;
      post?: boolean | Notification$postArgs<ExtArgs>;
      comment?: boolean | Notification$commentArgs<ExtArgs>;
    },
    ExtArgs['result']['notification']
  >;

  export type NotificationSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    isRead?: boolean;
    recipientId?: boolean;
    actorId?: boolean;
    type?: boolean;
    postId?: boolean;
    commentId?: boolean;
  };

  export type NotificationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'createdAt'
    | 'isRead'
    | 'recipientId'
    | 'actorId'
    | 'type'
    | 'postId'
    | 'commentId',
    ExtArgs['result']['notification']
  >;
  export type NotificationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recipient?: boolean | UserDefaultArgs<ExtArgs>;
    actor?: boolean | UserDefaultArgs<ExtArgs>;
    post?: boolean | Notification$postArgs<ExtArgs>;
    comment?: boolean | Notification$commentArgs<ExtArgs>;
  };
  export type NotificationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recipient?: boolean | UserDefaultArgs<ExtArgs>;
    actor?: boolean | UserDefaultArgs<ExtArgs>;
    post?: boolean | Notification$postArgs<ExtArgs>;
    comment?: boolean | Notification$commentArgs<ExtArgs>;
  };
  export type NotificationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recipient?: boolean | UserDefaultArgs<ExtArgs>;
    actor?: boolean | UserDefaultArgs<ExtArgs>;
    post?: boolean | Notification$postArgs<ExtArgs>;
    comment?: boolean | Notification$commentArgs<ExtArgs>;
  };

  export type $NotificationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Notification';
    objects: {
      recipient: Prisma.$UserPayload<ExtArgs>;
      actor: Prisma.$UserPayload<ExtArgs>;
      post: Prisma.$PostPayload<ExtArgs> | null;
      comment: Prisma.$CommentPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        createdAt: Date;
        isRead: boolean;
        recipientId: number;
        actorId: number;
        type: $Enums.Event;
        postId: number | null;
        commentId: number | null;
      },
      ExtArgs['result']['notification']
    >;
    composites: {};
  };

  type NotificationGetPayload<
    S extends boolean | null | undefined | NotificationDefaultArgs,
  > = $Result.GetResult<Prisma.$NotificationPayload, S>;

  type NotificationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    NotificationFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: NotificationCountAggregateInputType | true;
  };

  export interface NotificationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Notification'];
      meta: { name: 'Notification' };
    };
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(
      args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(
      args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     *
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     *
     */
    findMany<T extends NotificationFindManyArgs>(
      args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     *
     */
    create<T extends NotificationCreateArgs>(
      args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NotificationCreateManyArgs>(
      args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     *
     */
    delete<T extends NotificationDeleteArgs>(
      args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NotificationUpdateArgs>(
      args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NotificationDeleteManyArgs>(
      args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NotificationUpdateManyArgs>(
      args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(
      args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
     **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(
      args: Subset<T, NotificationAggregateArgs>
    ): Prisma.PrismaPromise<GetNotificationAggregateType<T>>;

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetNotificationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Notification model
     */
    readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    recipient<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    actor<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    post<T extends Notification$postArgs<ExtArgs> = {}>(
      args?: Subset<T, Notification$postArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    comment<T extends Notification$commentArgs<ExtArgs> = {}>(
      args?: Subset<T, Notification$commentArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<'Notification', 'Int'>;
    readonly createdAt: FieldRef<'Notification', 'DateTime'>;
    readonly isRead: FieldRef<'Notification', 'Boolean'>;
    readonly recipientId: FieldRef<'Notification', 'Int'>;
    readonly actorId: FieldRef<'Notification', 'Int'>;
    readonly type: FieldRef<'Notification', 'Event'>;
    readonly postId: FieldRef<'Notification', 'Int'>;
    readonly commentId: FieldRef<'Notification', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Notification create
   */
  export type NotificationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>;
  };

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>;
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput;
    /**
     * Limit how many Notifications to update.
     */
    limit?: number;
  };

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * The data used to update Notifications.
     */
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput;
    /**
     * Limit how many Notifications to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput;
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>;
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>;
  };

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput;
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number;
  };

  /**
   * Notification.post
   */
  export type Notification$postArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    where?: PostWhereInput;
  };

  /**
   * Notification.comment
   */
  export type Notification$commentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
  };

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    username: 'username';
    name: 'name';
    googleId: 'googleId';
    profilePic: 'profilePic';
    passwordHash: 'passwordHash';
    isOnboarded: 'isOnboarded';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const PostScalarFieldEnum: {
    id: 'id';
    content: 'content';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    authorId: 'authorId';
    originalPostId: 'originalPostId';
  };

  export type PostScalarFieldEnum =
    (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum];

  export const CommentScalarFieldEnum: {
    id: 'id';
    content: 'content';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    authorId: 'authorId';
    postId: 'postId';
  };

  export type CommentScalarFieldEnum =
    (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum];

  export const PostLikesScalarFieldEnum: {
    createdAt: 'createdAt';
    userId: 'userId';
    postId: 'postId';
  };

  export type PostLikesScalarFieldEnum =
    (typeof PostLikesScalarFieldEnum)[keyof typeof PostLikesScalarFieldEnum];

  export const CommentLikesScalarFieldEnum: {
    createdAt: 'createdAt';
    userId: 'userId';
    commentId: 'commentId';
  };

  export type CommentLikesScalarFieldEnum =
    (typeof CommentLikesScalarFieldEnum)[keyof typeof CommentLikesScalarFieldEnum];

  export const FollowsScalarFieldEnum: {
    createdAt: 'createdAt';
    followingUserId: 'followingUserId';
    followedUserId: 'followedUserId';
  };

  export type FollowsScalarFieldEnum =
    (typeof FollowsScalarFieldEnum)[keyof typeof FollowsScalarFieldEnum];

  export const NotificationScalarFieldEnum: {
    id: 'id';
    createdAt: 'createdAt';
    isRead: 'isRead';
    recipientId: 'recipientId';
    actorId: 'actorId';
    type: 'type';
    postId: 'postId';
    commentId: 'commentId';
  };

  export type NotificationScalarFieldEnum =
    (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Event'
   */
  export type EnumEventFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Event'
  >;

  /**
   * Reference to a field of type 'Event[]'
   */
  export type ListEnumEventFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Event[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<'User'> | number;
    email?: StringFilter<'User'> | string;
    username?: StringFilter<'User'> | string;
    name?: StringNullableFilter<'User'> | string | null;
    googleId?: StringNullableFilter<'User'> | string | null;
    profilePic?: StringNullableFilter<'User'> | string | null;
    passwordHash?: StringNullableFilter<'User'> | string | null;
    isOnboarded?: BoolFilter<'User'> | boolean;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    posts?: PostListRelationFilter;
    comments?: CommentListRelationFilter;
    postLikes?: PostLikesListRelationFilter;
    commentLikes?: CommentLikesListRelationFilter;
    followers?: FollowsListRelationFilter;
    following?: FollowsListRelationFilter;
    SentNotifications?: NotificationListRelationFilter;
    ReceivedNotifications?: NotificationListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    username?: SortOrder;
    name?: SortOrderInput | SortOrder;
    googleId?: SortOrderInput | SortOrder;
    profilePic?: SortOrderInput | SortOrder;
    passwordHash?: SortOrderInput | SortOrder;
    isOnboarded?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    posts?: PostOrderByRelationAggregateInput;
    comments?: CommentOrderByRelationAggregateInput;
    postLikes?: PostLikesOrderByRelationAggregateInput;
    commentLikes?: CommentLikesOrderByRelationAggregateInput;
    followers?: FollowsOrderByRelationAggregateInput;
    following?: FollowsOrderByRelationAggregateInput;
    SentNotifications?: NotificationOrderByRelationAggregateInput;
    ReceivedNotifications?: NotificationOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      username?: string;
      googleId?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringNullableFilter<'User'> | string | null;
      profilePic?: StringNullableFilter<'User'> | string | null;
      passwordHash?: StringNullableFilter<'User'> | string | null;
      isOnboarded?: BoolFilter<'User'> | boolean;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      posts?: PostListRelationFilter;
      comments?: CommentListRelationFilter;
      postLikes?: PostLikesListRelationFilter;
      commentLikes?: CommentLikesListRelationFilter;
      followers?: FollowsListRelationFilter;
      following?: FollowsListRelationFilter;
      SentNotifications?: NotificationListRelationFilter;
      ReceivedNotifications?: NotificationListRelationFilter;
    },
    'id' | 'email' | 'username' | 'googleId'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    username?: SortOrder;
    name?: SortOrderInput | SortOrder;
    googleId?: SortOrderInput | SortOrder;
    profilePic?: SortOrderInput | SortOrder;
    passwordHash?: SortOrderInput | SortOrder;
    isOnboarded?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'User'> | number;
    email?: StringWithAggregatesFilter<'User'> | string;
    username?: StringWithAggregatesFilter<'User'> | string;
    name?: StringNullableWithAggregatesFilter<'User'> | string | null;
    googleId?: StringNullableWithAggregatesFilter<'User'> | string | null;
    profilePic?: StringNullableWithAggregatesFilter<'User'> | string | null;
    passwordHash?: StringNullableWithAggregatesFilter<'User'> | string | null;
    isOnboarded?: BoolWithAggregatesFilter<'User'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[];
    OR?: PostWhereInput[];
    NOT?: PostWhereInput | PostWhereInput[];
    id?: IntFilter<'Post'> | number;
    content?: StringFilter<'Post'> | string;
    createdAt?: DateTimeFilter<'Post'> | Date | string;
    updatedAt?: DateTimeFilter<'Post'> | Date | string;
    authorId?: IntFilter<'Post'> | number;
    originalPostId?: IntNullableFilter<'Post'> | number | null;
    author?: XOR<UserScalarRelationFilter, UserWhereInput>;
    comments?: CommentListRelationFilter;
    originalPost?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null;
    sharedBy?: PostListRelationFilter;
    likes?: PostLikesListRelationFilter;
    notifications?: NotificationListRelationFilter;
  };

  export type PostOrderByWithRelationInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    originalPostId?: SortOrderInput | SortOrder;
    author?: UserOrderByWithRelationInput;
    comments?: CommentOrderByRelationAggregateInput;
    originalPost?: PostOrderByWithRelationInput;
    sharedBy?: PostOrderByRelationAggregateInput;
    likes?: PostLikesOrderByRelationAggregateInput;
    notifications?: NotificationOrderByRelationAggregateInput;
  };

  export type PostWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: PostWhereInput | PostWhereInput[];
      OR?: PostWhereInput[];
      NOT?: PostWhereInput | PostWhereInput[];
      content?: StringFilter<'Post'> | string;
      createdAt?: DateTimeFilter<'Post'> | Date | string;
      updatedAt?: DateTimeFilter<'Post'> | Date | string;
      authorId?: IntFilter<'Post'> | number;
      originalPostId?: IntNullableFilter<'Post'> | number | null;
      author?: XOR<UserScalarRelationFilter, UserWhereInput>;
      comments?: CommentListRelationFilter;
      originalPost?: XOR<
        PostNullableScalarRelationFilter,
        PostWhereInput
      > | null;
      sharedBy?: PostListRelationFilter;
      likes?: PostLikesListRelationFilter;
      notifications?: NotificationListRelationFilter;
    },
    'id'
  >;

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    originalPostId?: SortOrderInput | SortOrder;
    _count?: PostCountOrderByAggregateInput;
    _avg?: PostAvgOrderByAggregateInput;
    _max?: PostMaxOrderByAggregateInput;
    _min?: PostMinOrderByAggregateInput;
    _sum?: PostSumOrderByAggregateInput;
  };

  export type PostScalarWhereWithAggregatesInput = {
    AND?:
      | PostScalarWhereWithAggregatesInput
      | PostScalarWhereWithAggregatesInput[];
    OR?: PostScalarWhereWithAggregatesInput[];
    NOT?:
      | PostScalarWhereWithAggregatesInput
      | PostScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Post'> | number;
    content?: StringWithAggregatesFilter<'Post'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Post'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Post'> | Date | string;
    authorId?: IntWithAggregatesFilter<'Post'> | number;
    originalPostId?: IntNullableWithAggregatesFilter<'Post'> | number | null;
  };

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[];
    OR?: CommentWhereInput[];
    NOT?: CommentWhereInput | CommentWhereInput[];
    id?: IntFilter<'Comment'> | number;
    content?: StringFilter<'Comment'> | string;
    createdAt?: DateTimeFilter<'Comment'> | Date | string;
    updatedAt?: DateTimeFilter<'Comment'> | Date | string;
    authorId?: IntFilter<'Comment'> | number;
    postId?: IntFilter<'Comment'> | number;
    author?: XOR<UserScalarRelationFilter, UserWhereInput>;
    post?: XOR<PostScalarRelationFilter, PostWhereInput>;
    likes?: CommentLikesListRelationFilter;
    notifications?: NotificationListRelationFilter;
  };

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    postId?: SortOrder;
    author?: UserOrderByWithRelationInput;
    post?: PostOrderByWithRelationInput;
    likes?: CommentLikesOrderByRelationAggregateInput;
    notifications?: NotificationOrderByRelationAggregateInput;
  };

  export type CommentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: CommentWhereInput | CommentWhereInput[];
      OR?: CommentWhereInput[];
      NOT?: CommentWhereInput | CommentWhereInput[];
      content?: StringFilter<'Comment'> | string;
      createdAt?: DateTimeFilter<'Comment'> | Date | string;
      updatedAt?: DateTimeFilter<'Comment'> | Date | string;
      authorId?: IntFilter<'Comment'> | number;
      postId?: IntFilter<'Comment'> | number;
      author?: XOR<UserScalarRelationFilter, UserWhereInput>;
      post?: XOR<PostScalarRelationFilter, PostWhereInput>;
      likes?: CommentLikesListRelationFilter;
      notifications?: NotificationListRelationFilter;
    },
    'id'
  >;

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    postId?: SortOrder;
    _count?: CommentCountOrderByAggregateInput;
    _avg?: CommentAvgOrderByAggregateInput;
    _max?: CommentMaxOrderByAggregateInput;
    _min?: CommentMinOrderByAggregateInput;
    _sum?: CommentSumOrderByAggregateInput;
  };

  export type CommentScalarWhereWithAggregatesInput = {
    AND?:
      | CommentScalarWhereWithAggregatesInput
      | CommentScalarWhereWithAggregatesInput[];
    OR?: CommentScalarWhereWithAggregatesInput[];
    NOT?:
      | CommentScalarWhereWithAggregatesInput
      | CommentScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Comment'> | number;
    content?: StringWithAggregatesFilter<'Comment'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Comment'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Comment'> | Date | string;
    authorId?: IntWithAggregatesFilter<'Comment'> | number;
    postId?: IntWithAggregatesFilter<'Comment'> | number;
  };

  export type PostLikesWhereInput = {
    AND?: PostLikesWhereInput | PostLikesWhereInput[];
    OR?: PostLikesWhereInput[];
    NOT?: PostLikesWhereInput | PostLikesWhereInput[];
    createdAt?: DateTimeFilter<'PostLikes'> | Date | string;
    userId?: IntFilter<'PostLikes'> | number;
    postId?: IntFilter<'PostLikes'> | number;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    post?: XOR<PostScalarRelationFilter, PostWhereInput>;
  };

  export type PostLikesOrderByWithRelationInput = {
    createdAt?: SortOrder;
    userId?: SortOrder;
    postId?: SortOrder;
    user?: UserOrderByWithRelationInput;
    post?: PostOrderByWithRelationInput;
  };

  export type PostLikesWhereUniqueInput = Prisma.AtLeast<
    {
      userId_postId?: PostLikesUserIdPostIdCompoundUniqueInput;
      AND?: PostLikesWhereInput | PostLikesWhereInput[];
      OR?: PostLikesWhereInput[];
      NOT?: PostLikesWhereInput | PostLikesWhereInput[];
      createdAt?: DateTimeFilter<'PostLikes'> | Date | string;
      userId?: IntFilter<'PostLikes'> | number;
      postId?: IntFilter<'PostLikes'> | number;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      post?: XOR<PostScalarRelationFilter, PostWhereInput>;
    },
    'userId_postId'
  >;

  export type PostLikesOrderByWithAggregationInput = {
    createdAt?: SortOrder;
    userId?: SortOrder;
    postId?: SortOrder;
    _count?: PostLikesCountOrderByAggregateInput;
    _avg?: PostLikesAvgOrderByAggregateInput;
    _max?: PostLikesMaxOrderByAggregateInput;
    _min?: PostLikesMinOrderByAggregateInput;
    _sum?: PostLikesSumOrderByAggregateInput;
  };

  export type PostLikesScalarWhereWithAggregatesInput = {
    AND?:
      | PostLikesScalarWhereWithAggregatesInput
      | PostLikesScalarWhereWithAggregatesInput[];
    OR?: PostLikesScalarWhereWithAggregatesInput[];
    NOT?:
      | PostLikesScalarWhereWithAggregatesInput
      | PostLikesScalarWhereWithAggregatesInput[];
    createdAt?: DateTimeWithAggregatesFilter<'PostLikes'> | Date | string;
    userId?: IntWithAggregatesFilter<'PostLikes'> | number;
    postId?: IntWithAggregatesFilter<'PostLikes'> | number;
  };

  export type CommentLikesWhereInput = {
    AND?: CommentLikesWhereInput | CommentLikesWhereInput[];
    OR?: CommentLikesWhereInput[];
    NOT?: CommentLikesWhereInput | CommentLikesWhereInput[];
    createdAt?: DateTimeFilter<'CommentLikes'> | Date | string;
    userId?: IntFilter<'CommentLikes'> | number;
    commentId?: IntFilter<'CommentLikes'> | number;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>;
  };

  export type CommentLikesOrderByWithRelationInput = {
    createdAt?: SortOrder;
    userId?: SortOrder;
    commentId?: SortOrder;
    user?: UserOrderByWithRelationInput;
    comment?: CommentOrderByWithRelationInput;
  };

  export type CommentLikesWhereUniqueInput = Prisma.AtLeast<
    {
      userId_commentId?: CommentLikesUserIdCommentIdCompoundUniqueInput;
      AND?: CommentLikesWhereInput | CommentLikesWhereInput[];
      OR?: CommentLikesWhereInput[];
      NOT?: CommentLikesWhereInput | CommentLikesWhereInput[];
      createdAt?: DateTimeFilter<'CommentLikes'> | Date | string;
      userId?: IntFilter<'CommentLikes'> | number;
      commentId?: IntFilter<'CommentLikes'> | number;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>;
    },
    'userId_commentId'
  >;

  export type CommentLikesOrderByWithAggregationInput = {
    createdAt?: SortOrder;
    userId?: SortOrder;
    commentId?: SortOrder;
    _count?: CommentLikesCountOrderByAggregateInput;
    _avg?: CommentLikesAvgOrderByAggregateInput;
    _max?: CommentLikesMaxOrderByAggregateInput;
    _min?: CommentLikesMinOrderByAggregateInput;
    _sum?: CommentLikesSumOrderByAggregateInput;
  };

  export type CommentLikesScalarWhereWithAggregatesInput = {
    AND?:
      | CommentLikesScalarWhereWithAggregatesInput
      | CommentLikesScalarWhereWithAggregatesInput[];
    OR?: CommentLikesScalarWhereWithAggregatesInput[];
    NOT?:
      | CommentLikesScalarWhereWithAggregatesInput
      | CommentLikesScalarWhereWithAggregatesInput[];
    createdAt?: DateTimeWithAggregatesFilter<'CommentLikes'> | Date | string;
    userId?: IntWithAggregatesFilter<'CommentLikes'> | number;
    commentId?: IntWithAggregatesFilter<'CommentLikes'> | number;
  };

  export type FollowsWhereInput = {
    AND?: FollowsWhereInput | FollowsWhereInput[];
    OR?: FollowsWhereInput[];
    NOT?: FollowsWhereInput | FollowsWhereInput[];
    createdAt?: DateTimeFilter<'Follows'> | Date | string;
    followingUserId?: IntFilter<'Follows'> | number;
    followedUserId?: IntFilter<'Follows'> | number;
    followingUser?: XOR<UserScalarRelationFilter, UserWhereInput>;
    followedUser?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type FollowsOrderByWithRelationInput = {
    createdAt?: SortOrder;
    followingUserId?: SortOrder;
    followedUserId?: SortOrder;
    followingUser?: UserOrderByWithRelationInput;
    followedUser?: UserOrderByWithRelationInput;
  };

  export type FollowsWhereUniqueInput = Prisma.AtLeast<
    {
      followedUserId_followingUserId?: FollowsFollowedUserIdFollowingUserIdCompoundUniqueInput;
      AND?: FollowsWhereInput | FollowsWhereInput[];
      OR?: FollowsWhereInput[];
      NOT?: FollowsWhereInput | FollowsWhereInput[];
      createdAt?: DateTimeFilter<'Follows'> | Date | string;
      followingUserId?: IntFilter<'Follows'> | number;
      followedUserId?: IntFilter<'Follows'> | number;
      followingUser?: XOR<UserScalarRelationFilter, UserWhereInput>;
      followedUser?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'followedUserId_followingUserId'
  >;

  export type FollowsOrderByWithAggregationInput = {
    createdAt?: SortOrder;
    followingUserId?: SortOrder;
    followedUserId?: SortOrder;
    _count?: FollowsCountOrderByAggregateInput;
    _avg?: FollowsAvgOrderByAggregateInput;
    _max?: FollowsMaxOrderByAggregateInput;
    _min?: FollowsMinOrderByAggregateInput;
    _sum?: FollowsSumOrderByAggregateInput;
  };

  export type FollowsScalarWhereWithAggregatesInput = {
    AND?:
      | FollowsScalarWhereWithAggregatesInput
      | FollowsScalarWhereWithAggregatesInput[];
    OR?: FollowsScalarWhereWithAggregatesInput[];
    NOT?:
      | FollowsScalarWhereWithAggregatesInput
      | FollowsScalarWhereWithAggregatesInput[];
    createdAt?: DateTimeWithAggregatesFilter<'Follows'> | Date | string;
    followingUserId?: IntWithAggregatesFilter<'Follows'> | number;
    followedUserId?: IntWithAggregatesFilter<'Follows'> | number;
  };

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[];
    OR?: NotificationWhereInput[];
    NOT?: NotificationWhereInput | NotificationWhereInput[];
    id?: IntFilter<'Notification'> | number;
    createdAt?: DateTimeFilter<'Notification'> | Date | string;
    isRead?: BoolFilter<'Notification'> | boolean;
    recipientId?: IntFilter<'Notification'> | number;
    actorId?: IntFilter<'Notification'> | number;
    type?: EnumEventFilter<'Notification'> | $Enums.Event;
    postId?: IntNullableFilter<'Notification'> | number | null;
    commentId?: IntNullableFilter<'Notification'> | number | null;
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>;
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>;
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null;
    comment?: XOR<
      CommentNullableScalarRelationFilter,
      CommentWhereInput
    > | null;
  };

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    isRead?: SortOrder;
    recipientId?: SortOrder;
    actorId?: SortOrder;
    type?: SortOrder;
    postId?: SortOrderInput | SortOrder;
    commentId?: SortOrderInput | SortOrder;
    recipient?: UserOrderByWithRelationInput;
    actor?: UserOrderByWithRelationInput;
    post?: PostOrderByWithRelationInput;
    comment?: CommentOrderByWithRelationInput;
  };

  export type NotificationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: NotificationWhereInput | NotificationWhereInput[];
      OR?: NotificationWhereInput[];
      NOT?: NotificationWhereInput | NotificationWhereInput[];
      createdAt?: DateTimeFilter<'Notification'> | Date | string;
      isRead?: BoolFilter<'Notification'> | boolean;
      recipientId?: IntFilter<'Notification'> | number;
      actorId?: IntFilter<'Notification'> | number;
      type?: EnumEventFilter<'Notification'> | $Enums.Event;
      postId?: IntNullableFilter<'Notification'> | number | null;
      commentId?: IntNullableFilter<'Notification'> | number | null;
      recipient?: XOR<UserScalarRelationFilter, UserWhereInput>;
      actor?: XOR<UserScalarRelationFilter, UserWhereInput>;
      post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null;
      comment?: XOR<
        CommentNullableScalarRelationFilter,
        CommentWhereInput
      > | null;
    },
    'id'
  >;

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    isRead?: SortOrder;
    recipientId?: SortOrder;
    actorId?: SortOrder;
    type?: SortOrder;
    postId?: SortOrderInput | SortOrder;
    commentId?: SortOrderInput | SortOrder;
    _count?: NotificationCountOrderByAggregateInput;
    _avg?: NotificationAvgOrderByAggregateInput;
    _max?: NotificationMaxOrderByAggregateInput;
    _min?: NotificationMinOrderByAggregateInput;
    _sum?: NotificationSumOrderByAggregateInput;
  };

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?:
      | NotificationScalarWhereWithAggregatesInput
      | NotificationScalarWhereWithAggregatesInput[];
    OR?: NotificationScalarWhereWithAggregatesInput[];
    NOT?:
      | NotificationScalarWhereWithAggregatesInput
      | NotificationScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Notification'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Notification'> | Date | string;
    isRead?: BoolWithAggregatesFilter<'Notification'> | boolean;
    recipientId?: IntWithAggregatesFilter<'Notification'> | number;
    actorId?: IntWithAggregatesFilter<'Notification'> | number;
    type?: EnumEventWithAggregatesFilter<'Notification'> | $Enums.Event;
    postId?: IntNullableWithAggregatesFilter<'Notification'> | number | null;
    commentId?: IntNullableWithAggregatesFilter<'Notification'> | number | null;
  };

  export type UserCreateInput = {
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
    comments?: CommentCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesCreateNestedManyWithoutUserInput;
    commentLikes?: CommentLikesCreateNestedManyWithoutUserInput;
    followers?: FollowsCreateNestedManyWithoutFollowedUserInput;
    following?: FollowsCreateNestedManyWithoutFollowingUserInput;
    SentNotifications?: NotificationCreateNestedManyWithoutActorInput;
    ReceivedNotifications?: NotificationCreateNestedManyWithoutRecipientInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput;
    commentLikes?: CommentLikesUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowedUserInput;
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingUserInput;
    SentNotifications?: NotificationUncheckedCreateNestedManyWithoutActorInput;
    ReceivedNotifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput;
  };

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutAuthorNestedInput;
    comments?: CommentUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUpdateManyWithoutUserNestedInput;
    commentLikes?: CommentLikesUpdateManyWithoutUserNestedInput;
    followers?: FollowsUpdateManyWithoutFollowedUserNestedInput;
    following?: FollowsUpdateManyWithoutFollowingUserNestedInput;
    SentNotifications?: NotificationUpdateManyWithoutActorNestedInput;
    ReceivedNotifications?: NotificationUpdateManyWithoutRecipientNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput;
    commentLikes?: CommentLikesUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowsUncheckedUpdateManyWithoutFollowedUserNestedInput;
    following?: FollowsUncheckedUpdateManyWithoutFollowingUserNestedInput;
    SentNotifications?: NotificationUncheckedUpdateManyWithoutActorNestedInput;
    ReceivedNotifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostCreateInput = {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutPostsInput;
    comments?: CommentCreateNestedManyWithoutPostInput;
    originalPost?: PostCreateNestedOneWithoutSharedByInput;
    sharedBy?: PostCreateNestedManyWithoutOriginalPostInput;
    likes?: PostLikesCreateNestedManyWithoutPostInput;
    notifications?: NotificationCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    originalPostId?: number | null;
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput;
    sharedBy?: PostUncheckedCreateNestedManyWithoutOriginalPostInput;
    likes?: PostLikesUncheckedCreateNestedManyWithoutPostInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;
    comments?: CommentUpdateManyWithoutPostNestedInput;
    originalPost?: PostUpdateOneWithoutSharedByNestedInput;
    sharedBy?: PostUpdateManyWithoutOriginalPostNestedInput;
    likes?: PostLikesUpdateManyWithoutPostNestedInput;
    notifications?: NotificationUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    originalPostId?: NullableIntFieldUpdateOperationsInput | number | null;
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
    sharedBy?: PostUncheckedUpdateManyWithoutOriginalPostNestedInput;
    likes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type PostCreateManyInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    originalPostId?: number | null;
  };

  export type PostUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    originalPostId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type CommentCreateInput = {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutCommentsInput;
    post: PostCreateNestedOneWithoutCommentsInput;
    likes?: CommentLikesCreateNestedManyWithoutCommentInput;
    notifications?: NotificationCreateNestedManyWithoutCommentInput;
  };

  export type CommentUncheckedCreateInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    postId: number;
    likes?: CommentLikesUncheckedCreateNestedManyWithoutCommentInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutCommentInput;
  };

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput;
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput;
    likes?: CommentLikesUpdateManyWithoutCommentNestedInput;
    notifications?: NotificationUpdateManyWithoutCommentNestedInput;
  };

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    likes?: CommentLikesUncheckedUpdateManyWithoutCommentNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutCommentNestedInput;
  };

  export type CommentCreateManyInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    postId: number;
  };

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
  };

  export type PostLikesCreateInput = {
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutPostLikesInput;
    post: PostCreateNestedOneWithoutLikesInput;
  };

  export type PostLikesUncheckedCreateInput = {
    createdAt?: Date | string;
    userId: number;
    postId: number;
  };

  export type PostLikesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPostLikesNestedInput;
    post?: PostUpdateOneRequiredWithoutLikesNestedInput;
  };

  export type PostLikesUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
  };

  export type PostLikesCreateManyInput = {
    createdAt?: Date | string;
    userId: number;
    postId: number;
  };

  export type PostLikesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostLikesUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
  };

  export type CommentLikesCreateInput = {
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutCommentLikesInput;
    comment: CommentCreateNestedOneWithoutLikesInput;
  };

  export type CommentLikesUncheckedCreateInput = {
    createdAt?: Date | string;
    userId: number;
    commentId: number;
  };

  export type CommentLikesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCommentLikesNestedInput;
    comment?: CommentUpdateOneRequiredWithoutLikesNestedInput;
  };

  export type CommentLikesUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: IntFieldUpdateOperationsInput | number;
    commentId?: IntFieldUpdateOperationsInput | number;
  };

  export type CommentLikesCreateManyInput = {
    createdAt?: Date | string;
    userId: number;
    commentId: number;
  };

  export type CommentLikesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentLikesUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: IntFieldUpdateOperationsInput | number;
    commentId?: IntFieldUpdateOperationsInput | number;
  };

  export type FollowsCreateInput = {
    createdAt?: Date | string;
    followingUser: UserCreateNestedOneWithoutFollowingInput;
    followedUser: UserCreateNestedOneWithoutFollowersInput;
  };

  export type FollowsUncheckedCreateInput = {
    createdAt?: Date | string;
    followingUserId: number;
    followedUserId: number;
  };

  export type FollowsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followingUser?: UserUpdateOneRequiredWithoutFollowingNestedInput;
    followedUser?: UserUpdateOneRequiredWithoutFollowersNestedInput;
  };

  export type FollowsUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followingUserId?: IntFieldUpdateOperationsInput | number;
    followedUserId?: IntFieldUpdateOperationsInput | number;
  };

  export type FollowsCreateManyInput = {
    createdAt?: Date | string;
    followingUserId: number;
    followedUserId: number;
  };

  export type FollowsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FollowsUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followingUserId?: IntFieldUpdateOperationsInput | number;
    followedUserId?: IntFieldUpdateOperationsInput | number;
  };

  export type NotificationCreateInput = {
    createdAt?: Date | string;
    isRead?: boolean;
    type: $Enums.Event;
    recipient: UserCreateNestedOneWithoutReceivedNotificationsInput;
    actor: UserCreateNestedOneWithoutSentNotificationsInput;
    post?: PostCreateNestedOneWithoutNotificationsInput;
    comment?: CommentCreateNestedOneWithoutNotificationsInput;
  };

  export type NotificationUncheckedCreateInput = {
    id?: number;
    createdAt?: Date | string;
    isRead?: boolean;
    recipientId: number;
    actorId: number;
    type: $Enums.Event;
    postId?: number | null;
    commentId?: number | null;
  };

  export type NotificationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
    recipient?: UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput;
    actor?: UserUpdateOneRequiredWithoutSentNotificationsNestedInput;
    post?: PostUpdateOneWithoutNotificationsNestedInput;
    comment?: CommentUpdateOneWithoutNotificationsNestedInput;
  };

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    recipientId?: IntFieldUpdateOperationsInput | number;
    actorId?: IntFieldUpdateOperationsInput | number;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
    commentId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type NotificationCreateManyInput = {
    id?: number;
    createdAt?: Date | string;
    isRead?: boolean;
    recipientId: number;
    actorId: number;
    type: $Enums.Event;
    postId?: number | null;
    commentId?: number | null;
  };

  export type NotificationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
  };

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    recipientId?: IntFieldUpdateOperationsInput | number;
    actorId?: IntFieldUpdateOperationsInput | number;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
    commentId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type PostListRelationFilter = {
    every?: PostWhereInput;
    some?: PostWhereInput;
    none?: PostWhereInput;
  };

  export type CommentListRelationFilter = {
    every?: CommentWhereInput;
    some?: CommentWhereInput;
    none?: CommentWhereInput;
  };

  export type PostLikesListRelationFilter = {
    every?: PostLikesWhereInput;
    some?: PostLikesWhereInput;
    none?: PostLikesWhereInput;
  };

  export type CommentLikesListRelationFilter = {
    every?: CommentLikesWhereInput;
    some?: CommentLikesWhereInput;
    none?: CommentLikesWhereInput;
  };

  export type FollowsListRelationFilter = {
    every?: FollowsWhereInput;
    some?: FollowsWhereInput;
    none?: FollowsWhereInput;
  };

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput;
    some?: NotificationWhereInput;
    none?: NotificationWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PostLikesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CommentLikesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type FollowsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    username?: SortOrder;
    name?: SortOrder;
    googleId?: SortOrder;
    profilePic?: SortOrder;
    passwordHash?: SortOrder;
    isOnboarded?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    username?: SortOrder;
    name?: SortOrder;
    googleId?: SortOrder;
    profilePic?: SortOrder;
    passwordHash?: SortOrder;
    isOnboarded?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    username?: SortOrder;
    name?: SortOrder;
    googleId?: SortOrder;
    profilePic?: SortOrder;
    passwordHash?: SortOrder;
    isOnboarded?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null;
    isNot?: PostWhereInput | null;
  };

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    originalPostId?: SortOrder;
  };

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    originalPostId?: SortOrder;
  };

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    originalPostId?: SortOrder;
  };

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    originalPostId?: SortOrder;
  };

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    originalPostId?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type PostScalarRelationFilter = {
    is?: PostWhereInput;
    isNot?: PostWhereInput;
  };

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    postId?: SortOrder;
  };

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    postId?: SortOrder;
  };

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    postId?: SortOrder;
  };

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    postId?: SortOrder;
  };

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    postId?: SortOrder;
  };

  export type PostLikesUserIdPostIdCompoundUniqueInput = {
    userId: number;
    postId: number;
  };

  export type PostLikesCountOrderByAggregateInput = {
    createdAt?: SortOrder;
    userId?: SortOrder;
    postId?: SortOrder;
  };

  export type PostLikesAvgOrderByAggregateInput = {
    userId?: SortOrder;
    postId?: SortOrder;
  };

  export type PostLikesMaxOrderByAggregateInput = {
    createdAt?: SortOrder;
    userId?: SortOrder;
    postId?: SortOrder;
  };

  export type PostLikesMinOrderByAggregateInput = {
    createdAt?: SortOrder;
    userId?: SortOrder;
    postId?: SortOrder;
  };

  export type PostLikesSumOrderByAggregateInput = {
    userId?: SortOrder;
    postId?: SortOrder;
  };

  export type CommentScalarRelationFilter = {
    is?: CommentWhereInput;
    isNot?: CommentWhereInput;
  };

  export type CommentLikesUserIdCommentIdCompoundUniqueInput = {
    userId: number;
    commentId: number;
  };

  export type CommentLikesCountOrderByAggregateInput = {
    createdAt?: SortOrder;
    userId?: SortOrder;
    commentId?: SortOrder;
  };

  export type CommentLikesAvgOrderByAggregateInput = {
    userId?: SortOrder;
    commentId?: SortOrder;
  };

  export type CommentLikesMaxOrderByAggregateInput = {
    createdAt?: SortOrder;
    userId?: SortOrder;
    commentId?: SortOrder;
  };

  export type CommentLikesMinOrderByAggregateInput = {
    createdAt?: SortOrder;
    userId?: SortOrder;
    commentId?: SortOrder;
  };

  export type CommentLikesSumOrderByAggregateInput = {
    userId?: SortOrder;
    commentId?: SortOrder;
  };

  export type FollowsFollowedUserIdFollowingUserIdCompoundUniqueInput = {
    followedUserId: number;
    followingUserId: number;
  };

  export type FollowsCountOrderByAggregateInput = {
    createdAt?: SortOrder;
    followingUserId?: SortOrder;
    followedUserId?: SortOrder;
  };

  export type FollowsAvgOrderByAggregateInput = {
    followingUserId?: SortOrder;
    followedUserId?: SortOrder;
  };

  export type FollowsMaxOrderByAggregateInput = {
    createdAt?: SortOrder;
    followingUserId?: SortOrder;
    followedUserId?: SortOrder;
  };

  export type FollowsMinOrderByAggregateInput = {
    createdAt?: SortOrder;
    followingUserId?: SortOrder;
    followedUserId?: SortOrder;
  };

  export type FollowsSumOrderByAggregateInput = {
    followingUserId?: SortOrder;
    followedUserId?: SortOrder;
  };

  export type EnumEventFilter<$PrismaModel = never> = {
    equals?: $Enums.Event | EnumEventFieldRefInput<$PrismaModel>;
    in?: $Enums.Event[] | ListEnumEventFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Event[] | ListEnumEventFieldRefInput<$PrismaModel>;
    not?: NestedEnumEventFilter<$PrismaModel> | $Enums.Event;
  };

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null;
    isNot?: CommentWhereInput | null;
  };

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    isRead?: SortOrder;
    recipientId?: SortOrder;
    actorId?: SortOrder;
    type?: SortOrder;
    postId?: SortOrder;
    commentId?: SortOrder;
  };

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder;
    recipientId?: SortOrder;
    actorId?: SortOrder;
    postId?: SortOrder;
    commentId?: SortOrder;
  };

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    isRead?: SortOrder;
    recipientId?: SortOrder;
    actorId?: SortOrder;
    type?: SortOrder;
    postId?: SortOrder;
    commentId?: SortOrder;
  };

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    isRead?: SortOrder;
    recipientId?: SortOrder;
    actorId?: SortOrder;
    type?: SortOrder;
    postId?: SortOrder;
    commentId?: SortOrder;
  };

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder;
    recipientId?: SortOrder;
    actorId?: SortOrder;
    postId?: SortOrder;
    commentId?: SortOrder;
  };

  export type EnumEventWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Event | EnumEventFieldRefInput<$PrismaModel>;
    in?: $Enums.Event[] | ListEnumEventFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Event[] | ListEnumEventFieldRefInput<$PrismaModel>;
    not?: NestedEnumEventWithAggregatesFilter<$PrismaModel> | $Enums.Event;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEventFilter<$PrismaModel>;
    _max?: NestedEnumEventFilter<$PrismaModel>;
  };

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          CommentCreateWithoutAuthorInput,
          CommentUncheckedCreateWithoutAuthorInput
        >
      | CommentCreateWithoutAuthorInput[]
      | CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAuthorInput
      | CommentCreateOrConnectWithoutAuthorInput[];
    createMany?: CommentCreateManyAuthorInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type PostLikesCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PostLikesCreateWithoutUserInput,
          PostLikesUncheckedCreateWithoutUserInput
        >
      | PostLikesCreateWithoutUserInput[]
      | PostLikesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PostLikesCreateOrConnectWithoutUserInput
      | PostLikesCreateOrConnectWithoutUserInput[];
    createMany?: PostLikesCreateManyUserInputEnvelope;
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
  };

  export type CommentLikesCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CommentLikesCreateWithoutUserInput,
          CommentLikesUncheckedCreateWithoutUserInput
        >
      | CommentLikesCreateWithoutUserInput[]
      | CommentLikesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentLikesCreateOrConnectWithoutUserInput
      | CommentLikesCreateOrConnectWithoutUserInput[];
    createMany?: CommentLikesCreateManyUserInputEnvelope;
    connect?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
  };

  export type FollowsCreateNestedManyWithoutFollowedUserInput = {
    create?:
      | XOR<
          FollowsCreateWithoutFollowedUserInput,
          FollowsUncheckedCreateWithoutFollowedUserInput
        >
      | FollowsCreateWithoutFollowedUserInput[]
      | FollowsUncheckedCreateWithoutFollowedUserInput[];
    connectOrCreate?:
      | FollowsCreateOrConnectWithoutFollowedUserInput
      | FollowsCreateOrConnectWithoutFollowedUserInput[];
    createMany?: FollowsCreateManyFollowedUserInputEnvelope;
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
  };

  export type FollowsCreateNestedManyWithoutFollowingUserInput = {
    create?:
      | XOR<
          FollowsCreateWithoutFollowingUserInput,
          FollowsUncheckedCreateWithoutFollowingUserInput
        >
      | FollowsCreateWithoutFollowingUserInput[]
      | FollowsUncheckedCreateWithoutFollowingUserInput[];
    connectOrCreate?:
      | FollowsCreateOrConnectWithoutFollowingUserInput
      | FollowsCreateOrConnectWithoutFollowingUserInput[];
    createMany?: FollowsCreateManyFollowingUserInputEnvelope;
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
  };

  export type NotificationCreateNestedManyWithoutActorInput = {
    create?:
      | XOR<
          NotificationCreateWithoutActorInput,
          NotificationUncheckedCreateWithoutActorInput
        >
      | NotificationCreateWithoutActorInput[]
      | NotificationUncheckedCreateWithoutActorInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutActorInput
      | NotificationCreateOrConnectWithoutActorInput[];
    createMany?: NotificationCreateManyActorInputEnvelope;
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
  };

  export type NotificationCreateNestedManyWithoutRecipientInput = {
    create?:
      | XOR<
          NotificationCreateWithoutRecipientInput,
          NotificationUncheckedCreateWithoutRecipientInput
        >
      | NotificationCreateWithoutRecipientInput[]
      | NotificationUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutRecipientInput
      | NotificationCreateOrConnectWithoutRecipientInput[];
    createMany?: NotificationCreateManyRecipientInputEnvelope;
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
  };

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          CommentCreateWithoutAuthorInput,
          CommentUncheckedCreateWithoutAuthorInput
        >
      | CommentCreateWithoutAuthorInput[]
      | CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAuthorInput
      | CommentCreateOrConnectWithoutAuthorInput[];
    createMany?: CommentCreateManyAuthorInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type PostLikesUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PostLikesCreateWithoutUserInput,
          PostLikesUncheckedCreateWithoutUserInput
        >
      | PostLikesCreateWithoutUserInput[]
      | PostLikesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PostLikesCreateOrConnectWithoutUserInput
      | PostLikesCreateOrConnectWithoutUserInput[];
    createMany?: PostLikesCreateManyUserInputEnvelope;
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
  };

  export type CommentLikesUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CommentLikesCreateWithoutUserInput,
          CommentLikesUncheckedCreateWithoutUserInput
        >
      | CommentLikesCreateWithoutUserInput[]
      | CommentLikesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentLikesCreateOrConnectWithoutUserInput
      | CommentLikesCreateOrConnectWithoutUserInput[];
    createMany?: CommentLikesCreateManyUserInputEnvelope;
    connect?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
  };

  export type FollowsUncheckedCreateNestedManyWithoutFollowedUserInput = {
    create?:
      | XOR<
          FollowsCreateWithoutFollowedUserInput,
          FollowsUncheckedCreateWithoutFollowedUserInput
        >
      | FollowsCreateWithoutFollowedUserInput[]
      | FollowsUncheckedCreateWithoutFollowedUserInput[];
    connectOrCreate?:
      | FollowsCreateOrConnectWithoutFollowedUserInput
      | FollowsCreateOrConnectWithoutFollowedUserInput[];
    createMany?: FollowsCreateManyFollowedUserInputEnvelope;
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
  };

  export type FollowsUncheckedCreateNestedManyWithoutFollowingUserInput = {
    create?:
      | XOR<
          FollowsCreateWithoutFollowingUserInput,
          FollowsUncheckedCreateWithoutFollowingUserInput
        >
      | FollowsCreateWithoutFollowingUserInput[]
      | FollowsUncheckedCreateWithoutFollowingUserInput[];
    connectOrCreate?:
      | FollowsCreateOrConnectWithoutFollowingUserInput
      | FollowsCreateOrConnectWithoutFollowingUserInput[];
    createMany?: FollowsCreateManyFollowingUserInputEnvelope;
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
  };

  export type NotificationUncheckedCreateNestedManyWithoutActorInput = {
    create?:
      | XOR<
          NotificationCreateWithoutActorInput,
          NotificationUncheckedCreateWithoutActorInput
        >
      | NotificationCreateWithoutActorInput[]
      | NotificationUncheckedCreateWithoutActorInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutActorInput
      | NotificationCreateOrConnectWithoutActorInput[];
    createMany?: NotificationCreateManyActorInputEnvelope;
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
  };

  export type NotificationUncheckedCreateNestedManyWithoutRecipientInput = {
    create?:
      | XOR<
          NotificationCreateWithoutRecipientInput,
          NotificationUncheckedCreateWithoutRecipientInput
        >
      | NotificationCreateWithoutRecipientInput[]
      | NotificationUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutRecipientInput
      | NotificationCreateOrConnectWithoutRecipientInput[];
    createMany?: NotificationCreateManyRecipientInputEnvelope;
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutAuthorInput
      | PostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutAuthorInput
      | PostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutAuthorInput
      | PostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutAuthorInput,
          CommentUncheckedCreateWithoutAuthorInput
        >
      | CommentCreateWithoutAuthorInput[]
      | CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAuthorInput
      | CommentCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutAuthorInput
      | CommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: CommentCreateManyAuthorInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutAuthorInput
      | CommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutAuthorInput
      | CommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type PostLikesUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PostLikesCreateWithoutUserInput,
          PostLikesUncheckedCreateWithoutUserInput
        >
      | PostLikesCreateWithoutUserInput[]
      | PostLikesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PostLikesCreateOrConnectWithoutUserInput
      | PostLikesCreateOrConnectWithoutUserInput[];
    upsert?:
      | PostLikesUpsertWithWhereUniqueWithoutUserInput
      | PostLikesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PostLikesCreateManyUserInputEnvelope;
    set?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    disconnect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    delete?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    update?:
      | PostLikesUpdateWithWhereUniqueWithoutUserInput
      | PostLikesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PostLikesUpdateManyWithWhereWithoutUserInput
      | PostLikesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[];
  };

  export type CommentLikesUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CommentLikesCreateWithoutUserInput,
          CommentLikesUncheckedCreateWithoutUserInput
        >
      | CommentLikesCreateWithoutUserInput[]
      | CommentLikesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentLikesCreateOrConnectWithoutUserInput
      | CommentLikesCreateOrConnectWithoutUserInput[];
    upsert?:
      | CommentLikesUpsertWithWhereUniqueWithoutUserInput
      | CommentLikesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CommentLikesCreateManyUserInputEnvelope;
    set?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    disconnect?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    delete?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    connect?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    update?:
      | CommentLikesUpdateWithWhereUniqueWithoutUserInput
      | CommentLikesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CommentLikesUpdateManyWithWhereWithoutUserInput
      | CommentLikesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CommentLikesScalarWhereInput | CommentLikesScalarWhereInput[];
  };

  export type FollowsUpdateManyWithoutFollowedUserNestedInput = {
    create?:
      | XOR<
          FollowsCreateWithoutFollowedUserInput,
          FollowsUncheckedCreateWithoutFollowedUserInput
        >
      | FollowsCreateWithoutFollowedUserInput[]
      | FollowsUncheckedCreateWithoutFollowedUserInput[];
    connectOrCreate?:
      | FollowsCreateOrConnectWithoutFollowedUserInput
      | FollowsCreateOrConnectWithoutFollowedUserInput[];
    upsert?:
      | FollowsUpsertWithWhereUniqueWithoutFollowedUserInput
      | FollowsUpsertWithWhereUniqueWithoutFollowedUserInput[];
    createMany?: FollowsCreateManyFollowedUserInputEnvelope;
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    update?:
      | FollowsUpdateWithWhereUniqueWithoutFollowedUserInput
      | FollowsUpdateWithWhereUniqueWithoutFollowedUserInput[];
    updateMany?:
      | FollowsUpdateManyWithWhereWithoutFollowedUserInput
      | FollowsUpdateManyWithWhereWithoutFollowedUserInput[];
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[];
  };

  export type FollowsUpdateManyWithoutFollowingUserNestedInput = {
    create?:
      | XOR<
          FollowsCreateWithoutFollowingUserInput,
          FollowsUncheckedCreateWithoutFollowingUserInput
        >
      | FollowsCreateWithoutFollowingUserInput[]
      | FollowsUncheckedCreateWithoutFollowingUserInput[];
    connectOrCreate?:
      | FollowsCreateOrConnectWithoutFollowingUserInput
      | FollowsCreateOrConnectWithoutFollowingUserInput[];
    upsert?:
      | FollowsUpsertWithWhereUniqueWithoutFollowingUserInput
      | FollowsUpsertWithWhereUniqueWithoutFollowingUserInput[];
    createMany?: FollowsCreateManyFollowingUserInputEnvelope;
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    update?:
      | FollowsUpdateWithWhereUniqueWithoutFollowingUserInput
      | FollowsUpdateWithWhereUniqueWithoutFollowingUserInput[];
    updateMany?:
      | FollowsUpdateManyWithWhereWithoutFollowingUserInput
      | FollowsUpdateManyWithWhereWithoutFollowingUserInput[];
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[];
  };

  export type NotificationUpdateManyWithoutActorNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutActorInput,
          NotificationUncheckedCreateWithoutActorInput
        >
      | NotificationCreateWithoutActorInput[]
      | NotificationUncheckedCreateWithoutActorInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutActorInput
      | NotificationCreateOrConnectWithoutActorInput[];
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutActorInput
      | NotificationUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: NotificationCreateManyActorInputEnvelope;
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    update?:
      | NotificationUpdateWithWhereUniqueWithoutActorInput
      | NotificationUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutActorInput
      | NotificationUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
  };

  export type NotificationUpdateManyWithoutRecipientNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutRecipientInput,
          NotificationUncheckedCreateWithoutRecipientInput
        >
      | NotificationCreateWithoutRecipientInput[]
      | NotificationUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutRecipientInput
      | NotificationCreateOrConnectWithoutRecipientInput[];
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutRecipientInput
      | NotificationUpsertWithWhereUniqueWithoutRecipientInput[];
    createMany?: NotificationCreateManyRecipientInputEnvelope;
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    update?:
      | NotificationUpdateWithWhereUniqueWithoutRecipientInput
      | NotificationUpdateWithWhereUniqueWithoutRecipientInput[];
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutRecipientInput
      | NotificationUpdateManyWithWhereWithoutRecipientInput[];
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutAuthorInput
      | PostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutAuthorInput
      | PostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutAuthorInput
      | PostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutAuthorInput,
          CommentUncheckedCreateWithoutAuthorInput
        >
      | CommentCreateWithoutAuthorInput[]
      | CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAuthorInput
      | CommentCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutAuthorInput
      | CommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: CommentCreateManyAuthorInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutAuthorInput
      | CommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutAuthorInput
      | CommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type PostLikesUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PostLikesCreateWithoutUserInput,
          PostLikesUncheckedCreateWithoutUserInput
        >
      | PostLikesCreateWithoutUserInput[]
      | PostLikesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PostLikesCreateOrConnectWithoutUserInput
      | PostLikesCreateOrConnectWithoutUserInput[];
    upsert?:
      | PostLikesUpsertWithWhereUniqueWithoutUserInput
      | PostLikesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PostLikesCreateManyUserInputEnvelope;
    set?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    disconnect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    delete?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    update?:
      | PostLikesUpdateWithWhereUniqueWithoutUserInput
      | PostLikesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PostLikesUpdateManyWithWhereWithoutUserInput
      | PostLikesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[];
  };

  export type CommentLikesUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CommentLikesCreateWithoutUserInput,
          CommentLikesUncheckedCreateWithoutUserInput
        >
      | CommentLikesCreateWithoutUserInput[]
      | CommentLikesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentLikesCreateOrConnectWithoutUserInput
      | CommentLikesCreateOrConnectWithoutUserInput[];
    upsert?:
      | CommentLikesUpsertWithWhereUniqueWithoutUserInput
      | CommentLikesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CommentLikesCreateManyUserInputEnvelope;
    set?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    disconnect?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    delete?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    connect?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    update?:
      | CommentLikesUpdateWithWhereUniqueWithoutUserInput
      | CommentLikesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CommentLikesUpdateManyWithWhereWithoutUserInput
      | CommentLikesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CommentLikesScalarWhereInput | CommentLikesScalarWhereInput[];
  };

  export type FollowsUncheckedUpdateManyWithoutFollowedUserNestedInput = {
    create?:
      | XOR<
          FollowsCreateWithoutFollowedUserInput,
          FollowsUncheckedCreateWithoutFollowedUserInput
        >
      | FollowsCreateWithoutFollowedUserInput[]
      | FollowsUncheckedCreateWithoutFollowedUserInput[];
    connectOrCreate?:
      | FollowsCreateOrConnectWithoutFollowedUserInput
      | FollowsCreateOrConnectWithoutFollowedUserInput[];
    upsert?:
      | FollowsUpsertWithWhereUniqueWithoutFollowedUserInput
      | FollowsUpsertWithWhereUniqueWithoutFollowedUserInput[];
    createMany?: FollowsCreateManyFollowedUserInputEnvelope;
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    update?:
      | FollowsUpdateWithWhereUniqueWithoutFollowedUserInput
      | FollowsUpdateWithWhereUniqueWithoutFollowedUserInput[];
    updateMany?:
      | FollowsUpdateManyWithWhereWithoutFollowedUserInput
      | FollowsUpdateManyWithWhereWithoutFollowedUserInput[];
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[];
  };

  export type FollowsUncheckedUpdateManyWithoutFollowingUserNestedInput = {
    create?:
      | XOR<
          FollowsCreateWithoutFollowingUserInput,
          FollowsUncheckedCreateWithoutFollowingUserInput
        >
      | FollowsCreateWithoutFollowingUserInput[]
      | FollowsUncheckedCreateWithoutFollowingUserInput[];
    connectOrCreate?:
      | FollowsCreateOrConnectWithoutFollowingUserInput
      | FollowsCreateOrConnectWithoutFollowingUserInput[];
    upsert?:
      | FollowsUpsertWithWhereUniqueWithoutFollowingUserInput
      | FollowsUpsertWithWhereUniqueWithoutFollowingUserInput[];
    createMany?: FollowsCreateManyFollowingUserInputEnvelope;
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[];
    update?:
      | FollowsUpdateWithWhereUniqueWithoutFollowingUserInput
      | FollowsUpdateWithWhereUniqueWithoutFollowingUserInput[];
    updateMany?:
      | FollowsUpdateManyWithWhereWithoutFollowingUserInput
      | FollowsUpdateManyWithWhereWithoutFollowingUserInput[];
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[];
  };

  export type NotificationUncheckedUpdateManyWithoutActorNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutActorInput,
          NotificationUncheckedCreateWithoutActorInput
        >
      | NotificationCreateWithoutActorInput[]
      | NotificationUncheckedCreateWithoutActorInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutActorInput
      | NotificationCreateOrConnectWithoutActorInput[];
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutActorInput
      | NotificationUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: NotificationCreateManyActorInputEnvelope;
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    update?:
      | NotificationUpdateWithWhereUniqueWithoutActorInput
      | NotificationUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutActorInput
      | NotificationUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
  };

  export type NotificationUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutRecipientInput,
          NotificationUncheckedCreateWithoutRecipientInput
        >
      | NotificationCreateWithoutRecipientInput[]
      | NotificationUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutRecipientInput
      | NotificationCreateOrConnectWithoutRecipientInput[];
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutRecipientInput
      | NotificationUpsertWithWhereUniqueWithoutRecipientInput[];
    createMany?: NotificationCreateManyRecipientInputEnvelope;
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    update?:
      | NotificationUpdateWithWhereUniqueWithoutRecipientInput
      | NotificationUpdateWithWhereUniqueWithoutRecipientInput[];
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutRecipientInput
      | NotificationUpdateManyWithWhereWithoutRecipientInput[];
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput;
    connect?: UserWhereUniqueInput;
  };

  export type CommentCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<
          CommentCreateWithoutPostInput,
          CommentUncheckedCreateWithoutPostInput
        >
      | CommentCreateWithoutPostInput[]
      | CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutPostInput
      | CommentCreateOrConnectWithoutPostInput[];
    createMany?: CommentCreateManyPostInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type PostCreateNestedOneWithoutSharedByInput = {
    create?: XOR<
      PostCreateWithoutSharedByInput,
      PostUncheckedCreateWithoutSharedByInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutSharedByInput;
    connect?: PostWhereUniqueInput;
  };

  export type PostCreateNestedManyWithoutOriginalPostInput = {
    create?:
      | XOR<
          PostCreateWithoutOriginalPostInput,
          PostUncheckedCreateWithoutOriginalPostInput
        >
      | PostCreateWithoutOriginalPostInput[]
      | PostUncheckedCreateWithoutOriginalPostInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutOriginalPostInput
      | PostCreateOrConnectWithoutOriginalPostInput[];
    createMany?: PostCreateManyOriginalPostInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type PostLikesCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<
          PostLikesCreateWithoutPostInput,
          PostLikesUncheckedCreateWithoutPostInput
        >
      | PostLikesCreateWithoutPostInput[]
      | PostLikesUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PostLikesCreateOrConnectWithoutPostInput
      | PostLikesCreateOrConnectWithoutPostInput[];
    createMany?: PostLikesCreateManyPostInputEnvelope;
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
  };

  export type NotificationCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<
          NotificationCreateWithoutPostInput,
          NotificationUncheckedCreateWithoutPostInput
        >
      | NotificationCreateWithoutPostInput[]
      | NotificationUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutPostInput
      | NotificationCreateOrConnectWithoutPostInput[];
    createMany?: NotificationCreateManyPostInputEnvelope;
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<
          CommentCreateWithoutPostInput,
          CommentUncheckedCreateWithoutPostInput
        >
      | CommentCreateWithoutPostInput[]
      | CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutPostInput
      | CommentCreateOrConnectWithoutPostInput[];
    createMany?: CommentCreateManyPostInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type PostUncheckedCreateNestedManyWithoutOriginalPostInput = {
    create?:
      | XOR<
          PostCreateWithoutOriginalPostInput,
          PostUncheckedCreateWithoutOriginalPostInput
        >
      | PostCreateWithoutOriginalPostInput[]
      | PostUncheckedCreateWithoutOriginalPostInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutOriginalPostInput
      | PostCreateOrConnectWithoutOriginalPostInput[];
    createMany?: PostCreateManyOriginalPostInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type PostLikesUncheckedCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<
          PostLikesCreateWithoutPostInput,
          PostLikesUncheckedCreateWithoutPostInput
        >
      | PostLikesCreateWithoutPostInput[]
      | PostLikesUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PostLikesCreateOrConnectWithoutPostInput
      | PostLikesCreateOrConnectWithoutPostInput[];
    createMany?: PostLikesCreateManyPostInputEnvelope;
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
  };

  export type NotificationUncheckedCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<
          NotificationCreateWithoutPostInput,
          NotificationUncheckedCreateWithoutPostInput
        >
      | NotificationCreateWithoutPostInput[]
      | NotificationUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutPostInput
      | NotificationCreateOrConnectWithoutPostInput[];
    createMany?: NotificationCreateManyPostInputEnvelope;
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput;
    upsert?: UserUpsertWithoutPostsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPostsInput,
        UserUpdateWithoutPostsInput
      >,
      UserUncheckedUpdateWithoutPostsInput
    >;
  };

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutPostInput,
          CommentUncheckedCreateWithoutPostInput
        >
      | CommentCreateWithoutPostInput[]
      | CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutPostInput
      | CommentCreateOrConnectWithoutPostInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutPostInput
      | CommentUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: CommentCreateManyPostInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutPostInput
      | CommentUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutPostInput
      | CommentUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type PostUpdateOneWithoutSharedByNestedInput = {
    create?: XOR<
      PostCreateWithoutSharedByInput,
      PostUncheckedCreateWithoutSharedByInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutSharedByInput;
    upsert?: PostUpsertWithoutSharedByInput;
    disconnect?: PostWhereInput | boolean;
    delete?: PostWhereInput | boolean;
    connect?: PostWhereUniqueInput;
    update?: XOR<
      XOR<
        PostUpdateToOneWithWhereWithoutSharedByInput,
        PostUpdateWithoutSharedByInput
      >,
      PostUncheckedUpdateWithoutSharedByInput
    >;
  };

  export type PostUpdateManyWithoutOriginalPostNestedInput = {
    create?:
      | XOR<
          PostCreateWithoutOriginalPostInput,
          PostUncheckedCreateWithoutOriginalPostInput
        >
      | PostCreateWithoutOriginalPostInput[]
      | PostUncheckedCreateWithoutOriginalPostInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutOriginalPostInput
      | PostCreateOrConnectWithoutOriginalPostInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutOriginalPostInput
      | PostUpsertWithWhereUniqueWithoutOriginalPostInput[];
    createMany?: PostCreateManyOriginalPostInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutOriginalPostInput
      | PostUpdateWithWhereUniqueWithoutOriginalPostInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutOriginalPostInput
      | PostUpdateManyWithWhereWithoutOriginalPostInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type PostLikesUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<
          PostLikesCreateWithoutPostInput,
          PostLikesUncheckedCreateWithoutPostInput
        >
      | PostLikesCreateWithoutPostInput[]
      | PostLikesUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PostLikesCreateOrConnectWithoutPostInput
      | PostLikesCreateOrConnectWithoutPostInput[];
    upsert?:
      | PostLikesUpsertWithWhereUniqueWithoutPostInput
      | PostLikesUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: PostLikesCreateManyPostInputEnvelope;
    set?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    disconnect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    delete?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    update?:
      | PostLikesUpdateWithWhereUniqueWithoutPostInput
      | PostLikesUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | PostLikesUpdateManyWithWhereWithoutPostInput
      | PostLikesUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[];
  };

  export type NotificationUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutPostInput,
          NotificationUncheckedCreateWithoutPostInput
        >
      | NotificationCreateWithoutPostInput[]
      | NotificationUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutPostInput
      | NotificationCreateOrConnectWithoutPostInput[];
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutPostInput
      | NotificationUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: NotificationCreateManyPostInputEnvelope;
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    update?:
      | NotificationUpdateWithWhereUniqueWithoutPostInput
      | NotificationUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutPostInput
      | NotificationUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutPostInput,
          CommentUncheckedCreateWithoutPostInput
        >
      | CommentCreateWithoutPostInput[]
      | CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutPostInput
      | CommentCreateOrConnectWithoutPostInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutPostInput
      | CommentUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: CommentCreateManyPostInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutPostInput
      | CommentUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutPostInput
      | CommentUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type PostUncheckedUpdateManyWithoutOriginalPostNestedInput = {
    create?:
      | XOR<
          PostCreateWithoutOriginalPostInput,
          PostUncheckedCreateWithoutOriginalPostInput
        >
      | PostCreateWithoutOriginalPostInput[]
      | PostUncheckedCreateWithoutOriginalPostInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutOriginalPostInput
      | PostCreateOrConnectWithoutOriginalPostInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutOriginalPostInput
      | PostUpsertWithWhereUniqueWithoutOriginalPostInput[];
    createMany?: PostCreateManyOriginalPostInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutOriginalPostInput
      | PostUpdateWithWhereUniqueWithoutOriginalPostInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutOriginalPostInput
      | PostUpdateManyWithWhereWithoutOriginalPostInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type PostLikesUncheckedUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<
          PostLikesCreateWithoutPostInput,
          PostLikesUncheckedCreateWithoutPostInput
        >
      | PostLikesCreateWithoutPostInput[]
      | PostLikesUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PostLikesCreateOrConnectWithoutPostInput
      | PostLikesCreateOrConnectWithoutPostInput[];
    upsert?:
      | PostLikesUpsertWithWhereUniqueWithoutPostInput
      | PostLikesUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: PostLikesCreateManyPostInputEnvelope;
    set?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    disconnect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    delete?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[];
    update?:
      | PostLikesUpdateWithWhereUniqueWithoutPostInput
      | PostLikesUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | PostLikesUpdateManyWithWhereWithoutPostInput
      | PostLikesUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[];
  };

  export type NotificationUncheckedUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutPostInput,
          NotificationUncheckedCreateWithoutPostInput
        >
      | NotificationCreateWithoutPostInput[]
      | NotificationUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutPostInput
      | NotificationCreateOrConnectWithoutPostInput[];
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutPostInput
      | NotificationUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: NotificationCreateManyPostInputEnvelope;
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    update?:
      | NotificationUpdateWithWhereUniqueWithoutPostInput
      | NotificationUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutPostInput
      | NotificationUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;
    connect?: UserWhereUniqueInput;
  };

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<
      PostCreateWithoutCommentsInput,
      PostUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput;
    connect?: PostWhereUniqueInput;
  };

  export type CommentLikesCreateNestedManyWithoutCommentInput = {
    create?:
      | XOR<
          CommentLikesCreateWithoutCommentInput,
          CommentLikesUncheckedCreateWithoutCommentInput
        >
      | CommentLikesCreateWithoutCommentInput[]
      | CommentLikesUncheckedCreateWithoutCommentInput[];
    connectOrCreate?:
      | CommentLikesCreateOrConnectWithoutCommentInput
      | CommentLikesCreateOrConnectWithoutCommentInput[];
    createMany?: CommentLikesCreateManyCommentInputEnvelope;
    connect?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
  };

  export type NotificationCreateNestedManyWithoutCommentInput = {
    create?:
      | XOR<
          NotificationCreateWithoutCommentInput,
          NotificationUncheckedCreateWithoutCommentInput
        >
      | NotificationCreateWithoutCommentInput[]
      | NotificationUncheckedCreateWithoutCommentInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutCommentInput
      | NotificationCreateOrConnectWithoutCommentInput[];
    createMany?: NotificationCreateManyCommentInputEnvelope;
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
  };

  export type CommentLikesUncheckedCreateNestedManyWithoutCommentInput = {
    create?:
      | XOR<
          CommentLikesCreateWithoutCommentInput,
          CommentLikesUncheckedCreateWithoutCommentInput
        >
      | CommentLikesCreateWithoutCommentInput[]
      | CommentLikesUncheckedCreateWithoutCommentInput[];
    connectOrCreate?:
      | CommentLikesCreateOrConnectWithoutCommentInput
      | CommentLikesCreateOrConnectWithoutCommentInput[];
    createMany?: CommentLikesCreateManyCommentInputEnvelope;
    connect?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
  };

  export type NotificationUncheckedCreateNestedManyWithoutCommentInput = {
    create?:
      | XOR<
          NotificationCreateWithoutCommentInput,
          NotificationUncheckedCreateWithoutCommentInput
        >
      | NotificationCreateWithoutCommentInput[]
      | NotificationUncheckedCreateWithoutCommentInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutCommentInput
      | NotificationCreateOrConnectWithoutCommentInput[];
    createMany?: NotificationCreateManyCommentInputEnvelope;
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;
    upsert?: UserUpsertWithoutCommentsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCommentsInput,
        UserUpdateWithoutCommentsInput
      >,
      UserUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<
      PostCreateWithoutCommentsInput,
      PostUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput;
    upsert?: PostUpsertWithoutCommentsInput;
    connect?: PostWhereUniqueInput;
    update?: XOR<
      XOR<
        PostUpdateToOneWithWhereWithoutCommentsInput,
        PostUpdateWithoutCommentsInput
      >,
      PostUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type CommentLikesUpdateManyWithoutCommentNestedInput = {
    create?:
      | XOR<
          CommentLikesCreateWithoutCommentInput,
          CommentLikesUncheckedCreateWithoutCommentInput
        >
      | CommentLikesCreateWithoutCommentInput[]
      | CommentLikesUncheckedCreateWithoutCommentInput[];
    connectOrCreate?:
      | CommentLikesCreateOrConnectWithoutCommentInput
      | CommentLikesCreateOrConnectWithoutCommentInput[];
    upsert?:
      | CommentLikesUpsertWithWhereUniqueWithoutCommentInput
      | CommentLikesUpsertWithWhereUniqueWithoutCommentInput[];
    createMany?: CommentLikesCreateManyCommentInputEnvelope;
    set?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    disconnect?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    delete?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    connect?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    update?:
      | CommentLikesUpdateWithWhereUniqueWithoutCommentInput
      | CommentLikesUpdateWithWhereUniqueWithoutCommentInput[];
    updateMany?:
      | CommentLikesUpdateManyWithWhereWithoutCommentInput
      | CommentLikesUpdateManyWithWhereWithoutCommentInput[];
    deleteMany?: CommentLikesScalarWhereInput | CommentLikesScalarWhereInput[];
  };

  export type NotificationUpdateManyWithoutCommentNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutCommentInput,
          NotificationUncheckedCreateWithoutCommentInput
        >
      | NotificationCreateWithoutCommentInput[]
      | NotificationUncheckedCreateWithoutCommentInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutCommentInput
      | NotificationCreateOrConnectWithoutCommentInput[];
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutCommentInput
      | NotificationUpsertWithWhereUniqueWithoutCommentInput[];
    createMany?: NotificationCreateManyCommentInputEnvelope;
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    update?:
      | NotificationUpdateWithWhereUniqueWithoutCommentInput
      | NotificationUpdateWithWhereUniqueWithoutCommentInput[];
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutCommentInput
      | NotificationUpdateManyWithWhereWithoutCommentInput[];
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
  };

  export type CommentLikesUncheckedUpdateManyWithoutCommentNestedInput = {
    create?:
      | XOR<
          CommentLikesCreateWithoutCommentInput,
          CommentLikesUncheckedCreateWithoutCommentInput
        >
      | CommentLikesCreateWithoutCommentInput[]
      | CommentLikesUncheckedCreateWithoutCommentInput[];
    connectOrCreate?:
      | CommentLikesCreateOrConnectWithoutCommentInput
      | CommentLikesCreateOrConnectWithoutCommentInput[];
    upsert?:
      | CommentLikesUpsertWithWhereUniqueWithoutCommentInput
      | CommentLikesUpsertWithWhereUniqueWithoutCommentInput[];
    createMany?: CommentLikesCreateManyCommentInputEnvelope;
    set?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    disconnect?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    delete?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    connect?: CommentLikesWhereUniqueInput | CommentLikesWhereUniqueInput[];
    update?:
      | CommentLikesUpdateWithWhereUniqueWithoutCommentInput
      | CommentLikesUpdateWithWhereUniqueWithoutCommentInput[];
    updateMany?:
      | CommentLikesUpdateManyWithWhereWithoutCommentInput
      | CommentLikesUpdateManyWithWhereWithoutCommentInput[];
    deleteMany?: CommentLikesScalarWhereInput | CommentLikesScalarWhereInput[];
  };

  export type NotificationUncheckedUpdateManyWithoutCommentNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutCommentInput,
          NotificationUncheckedCreateWithoutCommentInput
        >
      | NotificationCreateWithoutCommentInput[]
      | NotificationUncheckedCreateWithoutCommentInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutCommentInput
      | NotificationCreateOrConnectWithoutCommentInput[];
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutCommentInput
      | NotificationUpsertWithWhereUniqueWithoutCommentInput[];
    createMany?: NotificationCreateManyCommentInputEnvelope;
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    update?:
      | NotificationUpdateWithWhereUniqueWithoutCommentInput
      | NotificationUpdateWithWhereUniqueWithoutCommentInput[];
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutCommentInput
      | NotificationUpdateManyWithWhereWithoutCommentInput[];
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutPostLikesInput = {
    create?: XOR<
      UserCreateWithoutPostLikesInput,
      UserUncheckedCreateWithoutPostLikesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPostLikesInput;
    connect?: UserWhereUniqueInput;
  };

  export type PostCreateNestedOneWithoutLikesInput = {
    create?: XOR<
      PostCreateWithoutLikesInput,
      PostUncheckedCreateWithoutLikesInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput;
    connect?: PostWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutPostLikesNestedInput = {
    create?: XOR<
      UserCreateWithoutPostLikesInput,
      UserUncheckedCreateWithoutPostLikesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPostLikesInput;
    upsert?: UserUpsertWithoutPostLikesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPostLikesInput,
        UserUpdateWithoutPostLikesInput
      >,
      UserUncheckedUpdateWithoutPostLikesInput
    >;
  };

  export type PostUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<
      PostCreateWithoutLikesInput,
      PostUncheckedCreateWithoutLikesInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput;
    upsert?: PostUpsertWithoutLikesInput;
    connect?: PostWhereUniqueInput;
    update?: XOR<
      XOR<
        PostUpdateToOneWithWhereWithoutLikesInput,
        PostUpdateWithoutLikesInput
      >,
      PostUncheckedUpdateWithoutLikesInput
    >;
  };

  export type UserCreateNestedOneWithoutCommentLikesInput = {
    create?: XOR<
      UserCreateWithoutCommentLikesInput,
      UserUncheckedCreateWithoutCommentLikesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCommentLikesInput;
    connect?: UserWhereUniqueInput;
  };

  export type CommentCreateNestedOneWithoutLikesInput = {
    create?: XOR<
      CommentCreateWithoutLikesInput,
      CommentUncheckedCreateWithoutLikesInput
    >;
    connectOrCreate?: CommentCreateOrConnectWithoutLikesInput;
    connect?: CommentWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutCommentLikesNestedInput = {
    create?: XOR<
      UserCreateWithoutCommentLikesInput,
      UserUncheckedCreateWithoutCommentLikesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCommentLikesInput;
    upsert?: UserUpsertWithoutCommentLikesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCommentLikesInput,
        UserUpdateWithoutCommentLikesInput
      >,
      UserUncheckedUpdateWithoutCommentLikesInput
    >;
  };

  export type CommentUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<
      CommentCreateWithoutLikesInput,
      CommentUncheckedCreateWithoutLikesInput
    >;
    connectOrCreate?: CommentCreateOrConnectWithoutLikesInput;
    upsert?: CommentUpsertWithoutLikesInput;
    connect?: CommentWhereUniqueInput;
    update?: XOR<
      XOR<
        CommentUpdateToOneWithWhereWithoutLikesInput,
        CommentUpdateWithoutLikesInput
      >,
      CommentUncheckedUpdateWithoutLikesInput
    >;
  };

  export type UserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<
      UserCreateWithoutFollowingInput,
      UserUncheckedCreateWithoutFollowingInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<
      UserCreateWithoutFollowersInput,
      UserUncheckedCreateWithoutFollowersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<
      UserCreateWithoutFollowingInput,
      UserUncheckedCreateWithoutFollowingInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput;
    upsert?: UserUpsertWithoutFollowingInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFollowingInput,
        UserUpdateWithoutFollowingInput
      >,
      UserUncheckedUpdateWithoutFollowingInput
    >;
  };

  export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<
      UserCreateWithoutFollowersInput,
      UserUncheckedCreateWithoutFollowersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput;
    upsert?: UserUpsertWithoutFollowersInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFollowersInput,
        UserUpdateWithoutFollowersInput
      >,
      UserUncheckedUpdateWithoutFollowersInput
    >;
  };

  export type UserCreateNestedOneWithoutReceivedNotificationsInput = {
    create?: XOR<
      UserCreateWithoutReceivedNotificationsInput,
      UserUncheckedCreateWithoutReceivedNotificationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutReceivedNotificationsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutSentNotificationsInput = {
    create?: XOR<
      UserCreateWithoutSentNotificationsInput,
      UserUncheckedCreateWithoutSentNotificationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSentNotificationsInput;
    connect?: UserWhereUniqueInput;
  };

  export type PostCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<
      PostCreateWithoutNotificationsInput,
      PostUncheckedCreateWithoutNotificationsInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutNotificationsInput;
    connect?: PostWhereUniqueInput;
  };

  export type CommentCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<
      CommentCreateWithoutNotificationsInput,
      CommentUncheckedCreateWithoutNotificationsInput
    >;
    connectOrCreate?: CommentCreateOrConnectWithoutNotificationsInput;
    connect?: CommentWhereUniqueInput;
  };

  export type EnumEventFieldUpdateOperationsInput = {
    set?: $Enums.Event;
  };

  export type UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput = {
    create?: XOR<
      UserCreateWithoutReceivedNotificationsInput,
      UserUncheckedCreateWithoutReceivedNotificationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutReceivedNotificationsInput;
    upsert?: UserUpsertWithoutReceivedNotificationsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutReceivedNotificationsInput,
        UserUpdateWithoutReceivedNotificationsInput
      >,
      UserUncheckedUpdateWithoutReceivedNotificationsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutSentNotificationsNestedInput = {
    create?: XOR<
      UserCreateWithoutSentNotificationsInput,
      UserUncheckedCreateWithoutSentNotificationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSentNotificationsInput;
    upsert?: UserUpsertWithoutSentNotificationsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSentNotificationsInput,
        UserUpdateWithoutSentNotificationsInput
      >,
      UserUncheckedUpdateWithoutSentNotificationsInput
    >;
  };

  export type PostUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<
      PostCreateWithoutNotificationsInput,
      PostUncheckedCreateWithoutNotificationsInput
    >;
    connectOrCreate?: PostCreateOrConnectWithoutNotificationsInput;
    upsert?: PostUpsertWithoutNotificationsInput;
    disconnect?: PostWhereInput | boolean;
    delete?: PostWhereInput | boolean;
    connect?: PostWhereUniqueInput;
    update?: XOR<
      XOR<
        PostUpdateToOneWithWhereWithoutNotificationsInput,
        PostUpdateWithoutNotificationsInput
      >,
      PostUncheckedUpdateWithoutNotificationsInput
    >;
  };

  export type CommentUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<
      CommentCreateWithoutNotificationsInput,
      CommentUncheckedCreateWithoutNotificationsInput
    >;
    connectOrCreate?: CommentCreateOrConnectWithoutNotificationsInput;
    upsert?: CommentUpsertWithoutNotificationsInput;
    disconnect?: CommentWhereInput | boolean;
    delete?: CommentWhereInput | boolean;
    connect?: CommentWhereUniqueInput;
    update?: XOR<
      XOR<
        CommentUpdateToOneWithWhereWithoutNotificationsInput,
        CommentUpdateWithoutNotificationsInput
      >,
      CommentUncheckedUpdateWithoutNotificationsInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumEventFilter<$PrismaModel = never> = {
    equals?: $Enums.Event | EnumEventFieldRefInput<$PrismaModel>;
    in?: $Enums.Event[] | ListEnumEventFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Event[] | ListEnumEventFieldRefInput<$PrismaModel>;
    not?: NestedEnumEventFilter<$PrismaModel> | $Enums.Event;
  };

  export type NestedEnumEventWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Event | EnumEventFieldRefInput<$PrismaModel>;
    in?: $Enums.Event[] | ListEnumEventFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Event[] | ListEnumEventFieldRefInput<$PrismaModel>;
    not?: NestedEnumEventWithAggregatesFilter<$PrismaModel> | $Enums.Event;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEventFilter<$PrismaModel>;
    _max?: NestedEnumEventFilter<$PrismaModel>;
  };

  export type PostCreateWithoutAuthorInput = {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: CommentCreateNestedManyWithoutPostInput;
    originalPost?: PostCreateNestedOneWithoutSharedByInput;
    sharedBy?: PostCreateNestedManyWithoutOriginalPostInput;
    likes?: PostLikesCreateNestedManyWithoutPostInput;
    notifications?: NotificationCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    originalPostId?: number | null;
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput;
    sharedBy?: PostUncheckedCreateNestedManyWithoutOriginalPostInput;
    likes?: PostLikesUncheckedCreateNestedManyWithoutPostInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutAuthorInput,
      PostUncheckedCreateWithoutAuthorInput
    >;
  };

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[];
    skipDuplicates?: boolean;
  };

  export type CommentCreateWithoutAuthorInput = {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    post: PostCreateNestedOneWithoutCommentsInput;
    likes?: CommentLikesCreateNestedManyWithoutCommentInput;
    notifications?: NotificationCreateNestedManyWithoutCommentInput;
  };

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    postId: number;
    likes?: CommentLikesUncheckedCreateNestedManyWithoutCommentInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutCommentInput;
  };

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutAuthorInput,
      CommentUncheckedCreateWithoutAuthorInput
    >;
  };

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[];
    skipDuplicates?: boolean;
  };

  export type PostLikesCreateWithoutUserInput = {
    createdAt?: Date | string;
    post: PostCreateNestedOneWithoutLikesInput;
  };

  export type PostLikesUncheckedCreateWithoutUserInput = {
    createdAt?: Date | string;
    postId: number;
  };

  export type PostLikesCreateOrConnectWithoutUserInput = {
    where: PostLikesWhereUniqueInput;
    create: XOR<
      PostLikesCreateWithoutUserInput,
      PostLikesUncheckedCreateWithoutUserInput
    >;
  };

  export type PostLikesCreateManyUserInputEnvelope = {
    data: PostLikesCreateManyUserInput | PostLikesCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type CommentLikesCreateWithoutUserInput = {
    createdAt?: Date | string;
    comment: CommentCreateNestedOneWithoutLikesInput;
  };

  export type CommentLikesUncheckedCreateWithoutUserInput = {
    createdAt?: Date | string;
    commentId: number;
  };

  export type CommentLikesCreateOrConnectWithoutUserInput = {
    where: CommentLikesWhereUniqueInput;
    create: XOR<
      CommentLikesCreateWithoutUserInput,
      CommentLikesUncheckedCreateWithoutUserInput
    >;
  };

  export type CommentLikesCreateManyUserInputEnvelope = {
    data: CommentLikesCreateManyUserInput | CommentLikesCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type FollowsCreateWithoutFollowedUserInput = {
    createdAt?: Date | string;
    followingUser: UserCreateNestedOneWithoutFollowingInput;
  };

  export type FollowsUncheckedCreateWithoutFollowedUserInput = {
    createdAt?: Date | string;
    followingUserId: number;
  };

  export type FollowsCreateOrConnectWithoutFollowedUserInput = {
    where: FollowsWhereUniqueInput;
    create: XOR<
      FollowsCreateWithoutFollowedUserInput,
      FollowsUncheckedCreateWithoutFollowedUserInput
    >;
  };

  export type FollowsCreateManyFollowedUserInputEnvelope = {
    data:
      | FollowsCreateManyFollowedUserInput
      | FollowsCreateManyFollowedUserInput[];
    skipDuplicates?: boolean;
  };

  export type FollowsCreateWithoutFollowingUserInput = {
    createdAt?: Date | string;
    followedUser: UserCreateNestedOneWithoutFollowersInput;
  };

  export type FollowsUncheckedCreateWithoutFollowingUserInput = {
    createdAt?: Date | string;
    followedUserId: number;
  };

  export type FollowsCreateOrConnectWithoutFollowingUserInput = {
    where: FollowsWhereUniqueInput;
    create: XOR<
      FollowsCreateWithoutFollowingUserInput,
      FollowsUncheckedCreateWithoutFollowingUserInput
    >;
  };

  export type FollowsCreateManyFollowingUserInputEnvelope = {
    data:
      | FollowsCreateManyFollowingUserInput
      | FollowsCreateManyFollowingUserInput[];
    skipDuplicates?: boolean;
  };

  export type NotificationCreateWithoutActorInput = {
    createdAt?: Date | string;
    isRead?: boolean;
    type: $Enums.Event;
    recipient: UserCreateNestedOneWithoutReceivedNotificationsInput;
    post?: PostCreateNestedOneWithoutNotificationsInput;
    comment?: CommentCreateNestedOneWithoutNotificationsInput;
  };

  export type NotificationUncheckedCreateWithoutActorInput = {
    id?: number;
    createdAt?: Date | string;
    isRead?: boolean;
    recipientId: number;
    type: $Enums.Event;
    postId?: number | null;
    commentId?: number | null;
  };

  export type NotificationCreateOrConnectWithoutActorInput = {
    where: NotificationWhereUniqueInput;
    create: XOR<
      NotificationCreateWithoutActorInput,
      NotificationUncheckedCreateWithoutActorInput
    >;
  };

  export type NotificationCreateManyActorInputEnvelope = {
    data: NotificationCreateManyActorInput | NotificationCreateManyActorInput[];
    skipDuplicates?: boolean;
  };

  export type NotificationCreateWithoutRecipientInput = {
    createdAt?: Date | string;
    isRead?: boolean;
    type: $Enums.Event;
    actor: UserCreateNestedOneWithoutSentNotificationsInput;
    post?: PostCreateNestedOneWithoutNotificationsInput;
    comment?: CommentCreateNestedOneWithoutNotificationsInput;
  };

  export type NotificationUncheckedCreateWithoutRecipientInput = {
    id?: number;
    createdAt?: Date | string;
    isRead?: boolean;
    actorId: number;
    type: $Enums.Event;
    postId?: number | null;
    commentId?: number | null;
  };

  export type NotificationCreateOrConnectWithoutRecipientInput = {
    where: NotificationWhereUniqueInput;
    create: XOR<
      NotificationCreateWithoutRecipientInput,
      NotificationUncheckedCreateWithoutRecipientInput
    >;
  };

  export type NotificationCreateManyRecipientInputEnvelope = {
    data:
      | NotificationCreateManyRecipientInput
      | NotificationCreateManyRecipientInput[];
    skipDuplicates?: boolean;
  };

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    update: XOR<
      PostUpdateWithoutAuthorInput,
      PostUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      PostCreateWithoutAuthorInput,
      PostUncheckedCreateWithoutAuthorInput
    >;
  };

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    data: XOR<
      PostUpdateWithoutAuthorInput,
      PostUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput;
    data: XOR<
      PostUpdateManyMutationInput,
      PostUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[];
    OR?: PostScalarWhereInput[];
    NOT?: PostScalarWhereInput | PostScalarWhereInput[];
    id?: IntFilter<'Post'> | number;
    content?: StringFilter<'Post'> | string;
    createdAt?: DateTimeFilter<'Post'> | Date | string;
    updatedAt?: DateTimeFilter<'Post'> | Date | string;
    authorId?: IntFilter<'Post'> | number;
    originalPostId?: IntNullableFilter<'Post'> | number | null;
  };

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutAuthorInput,
      CommentUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      CommentCreateWithoutAuthorInput,
      CommentUncheckedCreateWithoutAuthorInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutAuthorInput,
      CommentUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[];
    OR?: CommentScalarWhereInput[];
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[];
    id?: IntFilter<'Comment'> | number;
    content?: StringFilter<'Comment'> | string;
    createdAt?: DateTimeFilter<'Comment'> | Date | string;
    updatedAt?: DateTimeFilter<'Comment'> | Date | string;
    authorId?: IntFilter<'Comment'> | number;
    postId?: IntFilter<'Comment'> | number;
  };

  export type PostLikesUpsertWithWhereUniqueWithoutUserInput = {
    where: PostLikesWhereUniqueInput;
    update: XOR<
      PostLikesUpdateWithoutUserInput,
      PostLikesUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      PostLikesCreateWithoutUserInput,
      PostLikesUncheckedCreateWithoutUserInput
    >;
  };

  export type PostLikesUpdateWithWhereUniqueWithoutUserInput = {
    where: PostLikesWhereUniqueInput;
    data: XOR<
      PostLikesUpdateWithoutUserInput,
      PostLikesUncheckedUpdateWithoutUserInput
    >;
  };

  export type PostLikesUpdateManyWithWhereWithoutUserInput = {
    where: PostLikesScalarWhereInput;
    data: XOR<
      PostLikesUpdateManyMutationInput,
      PostLikesUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type PostLikesScalarWhereInput = {
    AND?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[];
    OR?: PostLikesScalarWhereInput[];
    NOT?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[];
    createdAt?: DateTimeFilter<'PostLikes'> | Date | string;
    userId?: IntFilter<'PostLikes'> | number;
    postId?: IntFilter<'PostLikes'> | number;
  };

  export type CommentLikesUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentLikesWhereUniqueInput;
    update: XOR<
      CommentLikesUpdateWithoutUserInput,
      CommentLikesUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      CommentLikesCreateWithoutUserInput,
      CommentLikesUncheckedCreateWithoutUserInput
    >;
  };

  export type CommentLikesUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentLikesWhereUniqueInput;
    data: XOR<
      CommentLikesUpdateWithoutUserInput,
      CommentLikesUncheckedUpdateWithoutUserInput
    >;
  };

  export type CommentLikesUpdateManyWithWhereWithoutUserInput = {
    where: CommentLikesScalarWhereInput;
    data: XOR<
      CommentLikesUpdateManyMutationInput,
      CommentLikesUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type CommentLikesScalarWhereInput = {
    AND?: CommentLikesScalarWhereInput | CommentLikesScalarWhereInput[];
    OR?: CommentLikesScalarWhereInput[];
    NOT?: CommentLikesScalarWhereInput | CommentLikesScalarWhereInput[];
    createdAt?: DateTimeFilter<'CommentLikes'> | Date | string;
    userId?: IntFilter<'CommentLikes'> | number;
    commentId?: IntFilter<'CommentLikes'> | number;
  };

  export type FollowsUpsertWithWhereUniqueWithoutFollowedUserInput = {
    where: FollowsWhereUniqueInput;
    update: XOR<
      FollowsUpdateWithoutFollowedUserInput,
      FollowsUncheckedUpdateWithoutFollowedUserInput
    >;
    create: XOR<
      FollowsCreateWithoutFollowedUserInput,
      FollowsUncheckedCreateWithoutFollowedUserInput
    >;
  };

  export type FollowsUpdateWithWhereUniqueWithoutFollowedUserInput = {
    where: FollowsWhereUniqueInput;
    data: XOR<
      FollowsUpdateWithoutFollowedUserInput,
      FollowsUncheckedUpdateWithoutFollowedUserInput
    >;
  };

  export type FollowsUpdateManyWithWhereWithoutFollowedUserInput = {
    where: FollowsScalarWhereInput;
    data: XOR<
      FollowsUpdateManyMutationInput,
      FollowsUncheckedUpdateManyWithoutFollowedUserInput
    >;
  };

  export type FollowsScalarWhereInput = {
    AND?: FollowsScalarWhereInput | FollowsScalarWhereInput[];
    OR?: FollowsScalarWhereInput[];
    NOT?: FollowsScalarWhereInput | FollowsScalarWhereInput[];
    createdAt?: DateTimeFilter<'Follows'> | Date | string;
    followingUserId?: IntFilter<'Follows'> | number;
    followedUserId?: IntFilter<'Follows'> | number;
  };

  export type FollowsUpsertWithWhereUniqueWithoutFollowingUserInput = {
    where: FollowsWhereUniqueInput;
    update: XOR<
      FollowsUpdateWithoutFollowingUserInput,
      FollowsUncheckedUpdateWithoutFollowingUserInput
    >;
    create: XOR<
      FollowsCreateWithoutFollowingUserInput,
      FollowsUncheckedCreateWithoutFollowingUserInput
    >;
  };

  export type FollowsUpdateWithWhereUniqueWithoutFollowingUserInput = {
    where: FollowsWhereUniqueInput;
    data: XOR<
      FollowsUpdateWithoutFollowingUserInput,
      FollowsUncheckedUpdateWithoutFollowingUserInput
    >;
  };

  export type FollowsUpdateManyWithWhereWithoutFollowingUserInput = {
    where: FollowsScalarWhereInput;
    data: XOR<
      FollowsUpdateManyMutationInput,
      FollowsUncheckedUpdateManyWithoutFollowingUserInput
    >;
  };

  export type NotificationUpsertWithWhereUniqueWithoutActorInput = {
    where: NotificationWhereUniqueInput;
    update: XOR<
      NotificationUpdateWithoutActorInput,
      NotificationUncheckedUpdateWithoutActorInput
    >;
    create: XOR<
      NotificationCreateWithoutActorInput,
      NotificationUncheckedCreateWithoutActorInput
    >;
  };

  export type NotificationUpdateWithWhereUniqueWithoutActorInput = {
    where: NotificationWhereUniqueInput;
    data: XOR<
      NotificationUpdateWithoutActorInput,
      NotificationUncheckedUpdateWithoutActorInput
    >;
  };

  export type NotificationUpdateManyWithWhereWithoutActorInput = {
    where: NotificationScalarWhereInput;
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyWithoutActorInput
    >;
  };

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
    OR?: NotificationScalarWhereInput[];
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
    id?: IntFilter<'Notification'> | number;
    createdAt?: DateTimeFilter<'Notification'> | Date | string;
    isRead?: BoolFilter<'Notification'> | boolean;
    recipientId?: IntFilter<'Notification'> | number;
    actorId?: IntFilter<'Notification'> | number;
    type?: EnumEventFilter<'Notification'> | $Enums.Event;
    postId?: IntNullableFilter<'Notification'> | number | null;
    commentId?: IntNullableFilter<'Notification'> | number | null;
  };

  export type NotificationUpsertWithWhereUniqueWithoutRecipientInput = {
    where: NotificationWhereUniqueInput;
    update: XOR<
      NotificationUpdateWithoutRecipientInput,
      NotificationUncheckedUpdateWithoutRecipientInput
    >;
    create: XOR<
      NotificationCreateWithoutRecipientInput,
      NotificationUncheckedCreateWithoutRecipientInput
    >;
  };

  export type NotificationUpdateWithWhereUniqueWithoutRecipientInput = {
    where: NotificationWhereUniqueInput;
    data: XOR<
      NotificationUpdateWithoutRecipientInput,
      NotificationUncheckedUpdateWithoutRecipientInput
    >;
  };

  export type NotificationUpdateManyWithWhereWithoutRecipientInput = {
    where: NotificationScalarWhereInput;
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyWithoutRecipientInput
    >;
  };

  export type UserCreateWithoutPostsInput = {
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: CommentCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesCreateNestedManyWithoutUserInput;
    commentLikes?: CommentLikesCreateNestedManyWithoutUserInput;
    followers?: FollowsCreateNestedManyWithoutFollowedUserInput;
    following?: FollowsCreateNestedManyWithoutFollowingUserInput;
    SentNotifications?: NotificationCreateNestedManyWithoutActorInput;
    ReceivedNotifications?: NotificationCreateNestedManyWithoutRecipientInput;
  };

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number;
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput;
    commentLikes?: CommentLikesUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowedUserInput;
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingUserInput;
    SentNotifications?: NotificationUncheckedCreateNestedManyWithoutActorInput;
    ReceivedNotifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput;
  };

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
  };

  export type CommentCreateWithoutPostInput = {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutCommentsInput;
    likes?: CommentLikesCreateNestedManyWithoutCommentInput;
    notifications?: NotificationCreateNestedManyWithoutCommentInput;
  };

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    likes?: CommentLikesUncheckedCreateNestedManyWithoutCommentInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutCommentInput;
  };

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutPostInput,
      CommentUncheckedCreateWithoutPostInput
    >;
  };

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[];
    skipDuplicates?: boolean;
  };

  export type PostCreateWithoutSharedByInput = {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutPostsInput;
    comments?: CommentCreateNestedManyWithoutPostInput;
    originalPost?: PostCreateNestedOneWithoutSharedByInput;
    likes?: PostLikesCreateNestedManyWithoutPostInput;
    notifications?: NotificationCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutSharedByInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    originalPostId?: number | null;
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput;
    likes?: PostLikesUncheckedCreateNestedManyWithoutPostInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutSharedByInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutSharedByInput,
      PostUncheckedCreateWithoutSharedByInput
    >;
  };

  export type PostCreateWithoutOriginalPostInput = {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutPostsInput;
    comments?: CommentCreateNestedManyWithoutPostInput;
    sharedBy?: PostCreateNestedManyWithoutOriginalPostInput;
    likes?: PostLikesCreateNestedManyWithoutPostInput;
    notifications?: NotificationCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutOriginalPostInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput;
    sharedBy?: PostUncheckedCreateNestedManyWithoutOriginalPostInput;
    likes?: PostLikesUncheckedCreateNestedManyWithoutPostInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutOriginalPostInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutOriginalPostInput,
      PostUncheckedCreateWithoutOriginalPostInput
    >;
  };

  export type PostCreateManyOriginalPostInputEnvelope = {
    data: PostCreateManyOriginalPostInput | PostCreateManyOriginalPostInput[];
    skipDuplicates?: boolean;
  };

  export type PostLikesCreateWithoutPostInput = {
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutPostLikesInput;
  };

  export type PostLikesUncheckedCreateWithoutPostInput = {
    createdAt?: Date | string;
    userId: number;
  };

  export type PostLikesCreateOrConnectWithoutPostInput = {
    where: PostLikesWhereUniqueInput;
    create: XOR<
      PostLikesCreateWithoutPostInput,
      PostLikesUncheckedCreateWithoutPostInput
    >;
  };

  export type PostLikesCreateManyPostInputEnvelope = {
    data: PostLikesCreateManyPostInput | PostLikesCreateManyPostInput[];
    skipDuplicates?: boolean;
  };

  export type NotificationCreateWithoutPostInput = {
    createdAt?: Date | string;
    isRead?: boolean;
    type: $Enums.Event;
    recipient: UserCreateNestedOneWithoutReceivedNotificationsInput;
    actor: UserCreateNestedOneWithoutSentNotificationsInput;
    comment?: CommentCreateNestedOneWithoutNotificationsInput;
  };

  export type NotificationUncheckedCreateWithoutPostInput = {
    id?: number;
    createdAt?: Date | string;
    isRead?: boolean;
    recipientId: number;
    actorId: number;
    type: $Enums.Event;
    commentId?: number | null;
  };

  export type NotificationCreateOrConnectWithoutPostInput = {
    where: NotificationWhereUniqueInput;
    create: XOR<
      NotificationCreateWithoutPostInput,
      NotificationUncheckedCreateWithoutPostInput
    >;
  };

  export type NotificationCreateManyPostInputEnvelope = {
    data: NotificationCreateManyPostInput | NotificationCreateManyPostInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutPostsInput = {
    update: XOR<
      UserUpdateWithoutPostsInput,
      UserUncheckedUpdateWithoutPostsInput
    >;
    create: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPostsInput,
      UserUncheckedUpdateWithoutPostsInput
    >;
  };

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUpdateManyWithoutUserNestedInput;
    commentLikes?: CommentLikesUpdateManyWithoutUserNestedInput;
    followers?: FollowsUpdateManyWithoutFollowedUserNestedInput;
    following?: FollowsUpdateManyWithoutFollowingUserNestedInput;
    SentNotifications?: NotificationUpdateManyWithoutActorNestedInput;
    ReceivedNotifications?: NotificationUpdateManyWithoutRecipientNestedInput;
  };

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput;
    commentLikes?: CommentLikesUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowsUncheckedUpdateManyWithoutFollowedUserNestedInput;
    following?: FollowsUncheckedUpdateManyWithoutFollowingUserNestedInput;
    SentNotifications?: NotificationUncheckedUpdateManyWithoutActorNestedInput;
    ReceivedNotifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
  };

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutPostInput,
      CommentUncheckedUpdateWithoutPostInput
    >;
    create: XOR<
      CommentCreateWithoutPostInput,
      CommentUncheckedCreateWithoutPostInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutPostInput,
      CommentUncheckedUpdateWithoutPostInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutPostInput
    >;
  };

  export type PostUpsertWithoutSharedByInput = {
    update: XOR<
      PostUpdateWithoutSharedByInput,
      PostUncheckedUpdateWithoutSharedByInput
    >;
    create: XOR<
      PostCreateWithoutSharedByInput,
      PostUncheckedCreateWithoutSharedByInput
    >;
    where?: PostWhereInput;
  };

  export type PostUpdateToOneWithWhereWithoutSharedByInput = {
    where?: PostWhereInput;
    data: XOR<
      PostUpdateWithoutSharedByInput,
      PostUncheckedUpdateWithoutSharedByInput
    >;
  };

  export type PostUpdateWithoutSharedByInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;
    comments?: CommentUpdateManyWithoutPostNestedInput;
    originalPost?: PostUpdateOneWithoutSharedByNestedInput;
    likes?: PostLikesUpdateManyWithoutPostNestedInput;
    notifications?: NotificationUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutSharedByInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    originalPostId?: NullableIntFieldUpdateOperationsInput | number | null;
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
    likes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type PostUpsertWithWhereUniqueWithoutOriginalPostInput = {
    where: PostWhereUniqueInput;
    update: XOR<
      PostUpdateWithoutOriginalPostInput,
      PostUncheckedUpdateWithoutOriginalPostInput
    >;
    create: XOR<
      PostCreateWithoutOriginalPostInput,
      PostUncheckedCreateWithoutOriginalPostInput
    >;
  };

  export type PostUpdateWithWhereUniqueWithoutOriginalPostInput = {
    where: PostWhereUniqueInput;
    data: XOR<
      PostUpdateWithoutOriginalPostInput,
      PostUncheckedUpdateWithoutOriginalPostInput
    >;
  };

  export type PostUpdateManyWithWhereWithoutOriginalPostInput = {
    where: PostScalarWhereInput;
    data: XOR<
      PostUpdateManyMutationInput,
      PostUncheckedUpdateManyWithoutOriginalPostInput
    >;
  };

  export type PostLikesUpsertWithWhereUniqueWithoutPostInput = {
    where: PostLikesWhereUniqueInput;
    update: XOR<
      PostLikesUpdateWithoutPostInput,
      PostLikesUncheckedUpdateWithoutPostInput
    >;
    create: XOR<
      PostLikesCreateWithoutPostInput,
      PostLikesUncheckedCreateWithoutPostInput
    >;
  };

  export type PostLikesUpdateWithWhereUniqueWithoutPostInput = {
    where: PostLikesWhereUniqueInput;
    data: XOR<
      PostLikesUpdateWithoutPostInput,
      PostLikesUncheckedUpdateWithoutPostInput
    >;
  };

  export type PostLikesUpdateManyWithWhereWithoutPostInput = {
    where: PostLikesScalarWhereInput;
    data: XOR<
      PostLikesUpdateManyMutationInput,
      PostLikesUncheckedUpdateManyWithoutPostInput
    >;
  };

  export type NotificationUpsertWithWhereUniqueWithoutPostInput = {
    where: NotificationWhereUniqueInput;
    update: XOR<
      NotificationUpdateWithoutPostInput,
      NotificationUncheckedUpdateWithoutPostInput
    >;
    create: XOR<
      NotificationCreateWithoutPostInput,
      NotificationUncheckedCreateWithoutPostInput
    >;
  };

  export type NotificationUpdateWithWhereUniqueWithoutPostInput = {
    where: NotificationWhereUniqueInput;
    data: XOR<
      NotificationUpdateWithoutPostInput,
      NotificationUncheckedUpdateWithoutPostInput
    >;
  };

  export type NotificationUpdateManyWithWhereWithoutPostInput = {
    where: NotificationScalarWhereInput;
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyWithoutPostInput
    >;
  };

  export type UserCreateWithoutCommentsInput = {
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesCreateNestedManyWithoutUserInput;
    commentLikes?: CommentLikesCreateNestedManyWithoutUserInput;
    followers?: FollowsCreateNestedManyWithoutFollowedUserInput;
    following?: FollowsCreateNestedManyWithoutFollowingUserInput;
    SentNotifications?: NotificationCreateNestedManyWithoutActorInput;
    ReceivedNotifications?: NotificationCreateNestedManyWithoutRecipientInput;
  };

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number;
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput;
    commentLikes?: CommentLikesUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowedUserInput;
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingUserInput;
    SentNotifications?: NotificationUncheckedCreateNestedManyWithoutActorInput;
    ReceivedNotifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput;
  };

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
  };

  export type PostCreateWithoutCommentsInput = {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutPostsInput;
    originalPost?: PostCreateNestedOneWithoutSharedByInput;
    sharedBy?: PostCreateNestedManyWithoutOriginalPostInput;
    likes?: PostLikesCreateNestedManyWithoutPostInput;
    notifications?: NotificationCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    originalPostId?: number | null;
    sharedBy?: PostUncheckedCreateNestedManyWithoutOriginalPostInput;
    likes?: PostLikesUncheckedCreateNestedManyWithoutPostInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutCommentsInput,
      PostUncheckedCreateWithoutCommentsInput
    >;
  };

  export type CommentLikesCreateWithoutCommentInput = {
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutCommentLikesInput;
  };

  export type CommentLikesUncheckedCreateWithoutCommentInput = {
    createdAt?: Date | string;
    userId: number;
  };

  export type CommentLikesCreateOrConnectWithoutCommentInput = {
    where: CommentLikesWhereUniqueInput;
    create: XOR<
      CommentLikesCreateWithoutCommentInput,
      CommentLikesUncheckedCreateWithoutCommentInput
    >;
  };

  export type CommentLikesCreateManyCommentInputEnvelope = {
    data:
      | CommentLikesCreateManyCommentInput
      | CommentLikesCreateManyCommentInput[];
    skipDuplicates?: boolean;
  };

  export type NotificationCreateWithoutCommentInput = {
    createdAt?: Date | string;
    isRead?: boolean;
    type: $Enums.Event;
    recipient: UserCreateNestedOneWithoutReceivedNotificationsInput;
    actor: UserCreateNestedOneWithoutSentNotificationsInput;
    post?: PostCreateNestedOneWithoutNotificationsInput;
  };

  export type NotificationUncheckedCreateWithoutCommentInput = {
    id?: number;
    createdAt?: Date | string;
    isRead?: boolean;
    recipientId: number;
    actorId: number;
    type: $Enums.Event;
    postId?: number | null;
  };

  export type NotificationCreateOrConnectWithoutCommentInput = {
    where: NotificationWhereUniqueInput;
    create: XOR<
      NotificationCreateWithoutCommentInput,
      NotificationUncheckedCreateWithoutCommentInput
    >;
  };

  export type NotificationCreateManyCommentInputEnvelope = {
    data:
      | NotificationCreateManyCommentInput
      | NotificationCreateManyCommentInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<
      UserUpdateWithoutCommentsInput,
      UserUncheckedUpdateWithoutCommentsInput
    >;
    create: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCommentsInput,
      UserUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type UserUpdateWithoutCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUpdateManyWithoutUserNestedInput;
    commentLikes?: CommentLikesUpdateManyWithoutUserNestedInput;
    followers?: FollowsUpdateManyWithoutFollowedUserNestedInput;
    following?: FollowsUpdateManyWithoutFollowingUserNestedInput;
    SentNotifications?: NotificationUpdateManyWithoutActorNestedInput;
    ReceivedNotifications?: NotificationUpdateManyWithoutRecipientNestedInput;
  };

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput;
    commentLikes?: CommentLikesUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowsUncheckedUpdateManyWithoutFollowedUserNestedInput;
    following?: FollowsUncheckedUpdateManyWithoutFollowingUserNestedInput;
    SentNotifications?: NotificationUncheckedUpdateManyWithoutActorNestedInput;
    ReceivedNotifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
  };

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<
      PostUpdateWithoutCommentsInput,
      PostUncheckedUpdateWithoutCommentsInput
    >;
    create: XOR<
      PostCreateWithoutCommentsInput,
      PostUncheckedCreateWithoutCommentsInput
    >;
    where?: PostWhereInput;
  };

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput;
    data: XOR<
      PostUpdateWithoutCommentsInput,
      PostUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type PostUpdateWithoutCommentsInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;
    originalPost?: PostUpdateOneWithoutSharedByNestedInput;
    sharedBy?: PostUpdateManyWithoutOriginalPostNestedInput;
    likes?: PostLikesUpdateManyWithoutPostNestedInput;
    notifications?: NotificationUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    originalPostId?: NullableIntFieldUpdateOperationsInput | number | null;
    sharedBy?: PostUncheckedUpdateManyWithoutOriginalPostNestedInput;
    likes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type CommentLikesUpsertWithWhereUniqueWithoutCommentInput = {
    where: CommentLikesWhereUniqueInput;
    update: XOR<
      CommentLikesUpdateWithoutCommentInput,
      CommentLikesUncheckedUpdateWithoutCommentInput
    >;
    create: XOR<
      CommentLikesCreateWithoutCommentInput,
      CommentLikesUncheckedCreateWithoutCommentInput
    >;
  };

  export type CommentLikesUpdateWithWhereUniqueWithoutCommentInput = {
    where: CommentLikesWhereUniqueInput;
    data: XOR<
      CommentLikesUpdateWithoutCommentInput,
      CommentLikesUncheckedUpdateWithoutCommentInput
    >;
  };

  export type CommentLikesUpdateManyWithWhereWithoutCommentInput = {
    where: CommentLikesScalarWhereInput;
    data: XOR<
      CommentLikesUpdateManyMutationInput,
      CommentLikesUncheckedUpdateManyWithoutCommentInput
    >;
  };

  export type NotificationUpsertWithWhereUniqueWithoutCommentInput = {
    where: NotificationWhereUniqueInput;
    update: XOR<
      NotificationUpdateWithoutCommentInput,
      NotificationUncheckedUpdateWithoutCommentInput
    >;
    create: XOR<
      NotificationCreateWithoutCommentInput,
      NotificationUncheckedCreateWithoutCommentInput
    >;
  };

  export type NotificationUpdateWithWhereUniqueWithoutCommentInput = {
    where: NotificationWhereUniqueInput;
    data: XOR<
      NotificationUpdateWithoutCommentInput,
      NotificationUncheckedUpdateWithoutCommentInput
    >;
  };

  export type NotificationUpdateManyWithWhereWithoutCommentInput = {
    where: NotificationScalarWhereInput;
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyWithoutCommentInput
    >;
  };

  export type UserCreateWithoutPostLikesInput = {
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
    comments?: CommentCreateNestedManyWithoutAuthorInput;
    commentLikes?: CommentLikesCreateNestedManyWithoutUserInput;
    followers?: FollowsCreateNestedManyWithoutFollowedUserInput;
    following?: FollowsCreateNestedManyWithoutFollowingUserInput;
    SentNotifications?: NotificationCreateNestedManyWithoutActorInput;
    ReceivedNotifications?: NotificationCreateNestedManyWithoutRecipientInput;
  };

  export type UserUncheckedCreateWithoutPostLikesInput = {
    id?: number;
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    commentLikes?: CommentLikesUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowedUserInput;
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingUserInput;
    SentNotifications?: NotificationUncheckedCreateNestedManyWithoutActorInput;
    ReceivedNotifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput;
  };

  export type UserCreateOrConnectWithoutPostLikesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPostLikesInput,
      UserUncheckedCreateWithoutPostLikesInput
    >;
  };

  export type PostCreateWithoutLikesInput = {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutPostsInput;
    comments?: CommentCreateNestedManyWithoutPostInput;
    originalPost?: PostCreateNestedOneWithoutSharedByInput;
    sharedBy?: PostCreateNestedManyWithoutOriginalPostInput;
    notifications?: NotificationCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutLikesInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    originalPostId?: number | null;
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput;
    sharedBy?: PostUncheckedCreateNestedManyWithoutOriginalPostInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutLikesInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutLikesInput,
      PostUncheckedCreateWithoutLikesInput
    >;
  };

  export type UserUpsertWithoutPostLikesInput = {
    update: XOR<
      UserUpdateWithoutPostLikesInput,
      UserUncheckedUpdateWithoutPostLikesInput
    >;
    create: XOR<
      UserCreateWithoutPostLikesInput,
      UserUncheckedCreateWithoutPostLikesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPostLikesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPostLikesInput,
      UserUncheckedUpdateWithoutPostLikesInput
    >;
  };

  export type UserUpdateWithoutPostLikesInput = {
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutAuthorNestedInput;
    comments?: CommentUpdateManyWithoutAuthorNestedInput;
    commentLikes?: CommentLikesUpdateManyWithoutUserNestedInput;
    followers?: FollowsUpdateManyWithoutFollowedUserNestedInput;
    following?: FollowsUpdateManyWithoutFollowingUserNestedInput;
    SentNotifications?: NotificationUpdateManyWithoutActorNestedInput;
    ReceivedNotifications?: NotificationUpdateManyWithoutRecipientNestedInput;
  };

  export type UserUncheckedUpdateWithoutPostLikesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    commentLikes?: CommentLikesUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowsUncheckedUpdateManyWithoutFollowedUserNestedInput;
    following?: FollowsUncheckedUpdateManyWithoutFollowingUserNestedInput;
    SentNotifications?: NotificationUncheckedUpdateManyWithoutActorNestedInput;
    ReceivedNotifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
  };

  export type PostUpsertWithoutLikesInput = {
    update: XOR<
      PostUpdateWithoutLikesInput,
      PostUncheckedUpdateWithoutLikesInput
    >;
    create: XOR<
      PostCreateWithoutLikesInput,
      PostUncheckedCreateWithoutLikesInput
    >;
    where?: PostWhereInput;
  };

  export type PostUpdateToOneWithWhereWithoutLikesInput = {
    where?: PostWhereInput;
    data: XOR<
      PostUpdateWithoutLikesInput,
      PostUncheckedUpdateWithoutLikesInput
    >;
  };

  export type PostUpdateWithoutLikesInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;
    comments?: CommentUpdateManyWithoutPostNestedInput;
    originalPost?: PostUpdateOneWithoutSharedByNestedInput;
    sharedBy?: PostUpdateManyWithoutOriginalPostNestedInput;
    notifications?: NotificationUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    originalPostId?: NullableIntFieldUpdateOperationsInput | number | null;
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
    sharedBy?: PostUncheckedUpdateManyWithoutOriginalPostNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type UserCreateWithoutCommentLikesInput = {
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
    comments?: CommentCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesCreateNestedManyWithoutUserInput;
    followers?: FollowsCreateNestedManyWithoutFollowedUserInput;
    following?: FollowsCreateNestedManyWithoutFollowingUserInput;
    SentNotifications?: NotificationCreateNestedManyWithoutActorInput;
    ReceivedNotifications?: NotificationCreateNestedManyWithoutRecipientInput;
  };

  export type UserUncheckedCreateWithoutCommentLikesInput = {
    id?: number;
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowedUserInput;
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingUserInput;
    SentNotifications?: NotificationUncheckedCreateNestedManyWithoutActorInput;
    ReceivedNotifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput;
  };

  export type UserCreateOrConnectWithoutCommentLikesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCommentLikesInput,
      UserUncheckedCreateWithoutCommentLikesInput
    >;
  };

  export type CommentCreateWithoutLikesInput = {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutCommentsInput;
    post: PostCreateNestedOneWithoutCommentsInput;
    notifications?: NotificationCreateNestedManyWithoutCommentInput;
  };

  export type CommentUncheckedCreateWithoutLikesInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    postId: number;
    notifications?: NotificationUncheckedCreateNestedManyWithoutCommentInput;
  };

  export type CommentCreateOrConnectWithoutLikesInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutLikesInput,
      CommentUncheckedCreateWithoutLikesInput
    >;
  };

  export type UserUpsertWithoutCommentLikesInput = {
    update: XOR<
      UserUpdateWithoutCommentLikesInput,
      UserUncheckedUpdateWithoutCommentLikesInput
    >;
    create: XOR<
      UserCreateWithoutCommentLikesInput,
      UserUncheckedCreateWithoutCommentLikesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCommentLikesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCommentLikesInput,
      UserUncheckedUpdateWithoutCommentLikesInput
    >;
  };

  export type UserUpdateWithoutCommentLikesInput = {
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutAuthorNestedInput;
    comments?: CommentUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUpdateManyWithoutUserNestedInput;
    followers?: FollowsUpdateManyWithoutFollowedUserNestedInput;
    following?: FollowsUpdateManyWithoutFollowingUserNestedInput;
    SentNotifications?: NotificationUpdateManyWithoutActorNestedInput;
    ReceivedNotifications?: NotificationUpdateManyWithoutRecipientNestedInput;
  };

  export type UserUncheckedUpdateWithoutCommentLikesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowsUncheckedUpdateManyWithoutFollowedUserNestedInput;
    following?: FollowsUncheckedUpdateManyWithoutFollowingUserNestedInput;
    SentNotifications?: NotificationUncheckedUpdateManyWithoutActorNestedInput;
    ReceivedNotifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
  };

  export type CommentUpsertWithoutLikesInput = {
    update: XOR<
      CommentUpdateWithoutLikesInput,
      CommentUncheckedUpdateWithoutLikesInput
    >;
    create: XOR<
      CommentCreateWithoutLikesInput,
      CommentUncheckedCreateWithoutLikesInput
    >;
    where?: CommentWhereInput;
  };

  export type CommentUpdateToOneWithWhereWithoutLikesInput = {
    where?: CommentWhereInput;
    data: XOR<
      CommentUpdateWithoutLikesInput,
      CommentUncheckedUpdateWithoutLikesInput
    >;
  };

  export type CommentUpdateWithoutLikesInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput;
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput;
    notifications?: NotificationUpdateManyWithoutCommentNestedInput;
  };

  export type CommentUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    notifications?: NotificationUncheckedUpdateManyWithoutCommentNestedInput;
  };

  export type UserCreateWithoutFollowingInput = {
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
    comments?: CommentCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesCreateNestedManyWithoutUserInput;
    commentLikes?: CommentLikesCreateNestedManyWithoutUserInput;
    followers?: FollowsCreateNestedManyWithoutFollowedUserInput;
    SentNotifications?: NotificationCreateNestedManyWithoutActorInput;
    ReceivedNotifications?: NotificationCreateNestedManyWithoutRecipientInput;
  };

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: number;
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput;
    commentLikes?: CommentLikesUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowedUserInput;
    SentNotifications?: NotificationUncheckedCreateNestedManyWithoutActorInput;
    ReceivedNotifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput;
  };

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFollowingInput,
      UserUncheckedCreateWithoutFollowingInput
    >;
  };

  export type UserCreateWithoutFollowersInput = {
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
    comments?: CommentCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesCreateNestedManyWithoutUserInput;
    commentLikes?: CommentLikesCreateNestedManyWithoutUserInput;
    following?: FollowsCreateNestedManyWithoutFollowingUserInput;
    SentNotifications?: NotificationCreateNestedManyWithoutActorInput;
    ReceivedNotifications?: NotificationCreateNestedManyWithoutRecipientInput;
  };

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: number;
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput;
    commentLikes?: CommentLikesUncheckedCreateNestedManyWithoutUserInput;
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingUserInput;
    SentNotifications?: NotificationUncheckedCreateNestedManyWithoutActorInput;
    ReceivedNotifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput;
  };

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFollowersInput,
      UserUncheckedCreateWithoutFollowersInput
    >;
  };

  export type UserUpsertWithoutFollowingInput = {
    update: XOR<
      UserUpdateWithoutFollowingInput,
      UserUncheckedUpdateWithoutFollowingInput
    >;
    create: XOR<
      UserCreateWithoutFollowingInput,
      UserUncheckedCreateWithoutFollowingInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFollowingInput,
      UserUncheckedUpdateWithoutFollowingInput
    >;
  };

  export type UserUpdateWithoutFollowingInput = {
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutAuthorNestedInput;
    comments?: CommentUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUpdateManyWithoutUserNestedInput;
    commentLikes?: CommentLikesUpdateManyWithoutUserNestedInput;
    followers?: FollowsUpdateManyWithoutFollowedUserNestedInput;
    SentNotifications?: NotificationUpdateManyWithoutActorNestedInput;
    ReceivedNotifications?: NotificationUpdateManyWithoutRecipientNestedInput;
  };

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput;
    commentLikes?: CommentLikesUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowsUncheckedUpdateManyWithoutFollowedUserNestedInput;
    SentNotifications?: NotificationUncheckedUpdateManyWithoutActorNestedInput;
    ReceivedNotifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
  };

  export type UserUpsertWithoutFollowersInput = {
    update: XOR<
      UserUpdateWithoutFollowersInput,
      UserUncheckedUpdateWithoutFollowersInput
    >;
    create: XOR<
      UserCreateWithoutFollowersInput,
      UserUncheckedCreateWithoutFollowersInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFollowersInput,
      UserUncheckedUpdateWithoutFollowersInput
    >;
  };

  export type UserUpdateWithoutFollowersInput = {
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutAuthorNestedInput;
    comments?: CommentUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUpdateManyWithoutUserNestedInput;
    commentLikes?: CommentLikesUpdateManyWithoutUserNestedInput;
    following?: FollowsUpdateManyWithoutFollowingUserNestedInput;
    SentNotifications?: NotificationUpdateManyWithoutActorNestedInput;
    ReceivedNotifications?: NotificationUpdateManyWithoutRecipientNestedInput;
  };

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput;
    commentLikes?: CommentLikesUncheckedUpdateManyWithoutUserNestedInput;
    following?: FollowsUncheckedUpdateManyWithoutFollowingUserNestedInput;
    SentNotifications?: NotificationUncheckedUpdateManyWithoutActorNestedInput;
    ReceivedNotifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
  };

  export type UserCreateWithoutReceivedNotificationsInput = {
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
    comments?: CommentCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesCreateNestedManyWithoutUserInput;
    commentLikes?: CommentLikesCreateNestedManyWithoutUserInput;
    followers?: FollowsCreateNestedManyWithoutFollowedUserInput;
    following?: FollowsCreateNestedManyWithoutFollowingUserInput;
    SentNotifications?: NotificationCreateNestedManyWithoutActorInput;
  };

  export type UserUncheckedCreateWithoutReceivedNotificationsInput = {
    id?: number;
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput;
    commentLikes?: CommentLikesUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowedUserInput;
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingUserInput;
    SentNotifications?: NotificationUncheckedCreateNestedManyWithoutActorInput;
  };

  export type UserCreateOrConnectWithoutReceivedNotificationsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutReceivedNotificationsInput,
      UserUncheckedCreateWithoutReceivedNotificationsInput
    >;
  };

  export type UserCreateWithoutSentNotificationsInput = {
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
    comments?: CommentCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesCreateNestedManyWithoutUserInput;
    commentLikes?: CommentLikesCreateNestedManyWithoutUserInput;
    followers?: FollowsCreateNestedManyWithoutFollowedUserInput;
    following?: FollowsCreateNestedManyWithoutFollowingUserInput;
    ReceivedNotifications?: NotificationCreateNestedManyWithoutRecipientInput;
  };

  export type UserUncheckedCreateWithoutSentNotificationsInput = {
    id?: number;
    email: string;
    username: string;
    name?: string | null;
    googleId?: string | null;
    profilePic?: string | null;
    passwordHash?: string | null;
    isOnboarded?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput;
    commentLikes?: CommentLikesUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowedUserInput;
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingUserInput;
    ReceivedNotifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput;
  };

  export type UserCreateOrConnectWithoutSentNotificationsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSentNotificationsInput,
      UserUncheckedCreateWithoutSentNotificationsInput
    >;
  };

  export type PostCreateWithoutNotificationsInput = {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutPostsInput;
    comments?: CommentCreateNestedManyWithoutPostInput;
    originalPost?: PostCreateNestedOneWithoutSharedByInput;
    sharedBy?: PostCreateNestedManyWithoutOriginalPostInput;
    likes?: PostLikesCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutNotificationsInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    originalPostId?: number | null;
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput;
    sharedBy?: PostUncheckedCreateNestedManyWithoutOriginalPostInput;
    likes?: PostLikesUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutNotificationsInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutNotificationsInput,
      PostUncheckedCreateWithoutNotificationsInput
    >;
  };

  export type CommentCreateWithoutNotificationsInput = {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutCommentsInput;
    post: PostCreateNestedOneWithoutCommentsInput;
    likes?: CommentLikesCreateNestedManyWithoutCommentInput;
  };

  export type CommentUncheckedCreateWithoutNotificationsInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    postId: number;
    likes?: CommentLikesUncheckedCreateNestedManyWithoutCommentInput;
  };

  export type CommentCreateOrConnectWithoutNotificationsInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutNotificationsInput,
      CommentUncheckedCreateWithoutNotificationsInput
    >;
  };

  export type UserUpsertWithoutReceivedNotificationsInput = {
    update: XOR<
      UserUpdateWithoutReceivedNotificationsInput,
      UserUncheckedUpdateWithoutReceivedNotificationsInput
    >;
    create: XOR<
      UserCreateWithoutReceivedNotificationsInput,
      UserUncheckedCreateWithoutReceivedNotificationsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutReceivedNotificationsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutReceivedNotificationsInput,
      UserUncheckedUpdateWithoutReceivedNotificationsInput
    >;
  };

  export type UserUpdateWithoutReceivedNotificationsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutAuthorNestedInput;
    comments?: CommentUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUpdateManyWithoutUserNestedInput;
    commentLikes?: CommentLikesUpdateManyWithoutUserNestedInput;
    followers?: FollowsUpdateManyWithoutFollowedUserNestedInput;
    following?: FollowsUpdateManyWithoutFollowingUserNestedInput;
    SentNotifications?: NotificationUpdateManyWithoutActorNestedInput;
  };

  export type UserUncheckedUpdateWithoutReceivedNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput;
    commentLikes?: CommentLikesUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowsUncheckedUpdateManyWithoutFollowedUserNestedInput;
    following?: FollowsUncheckedUpdateManyWithoutFollowingUserNestedInput;
    SentNotifications?: NotificationUncheckedUpdateManyWithoutActorNestedInput;
  };

  export type UserUpsertWithoutSentNotificationsInput = {
    update: XOR<
      UserUpdateWithoutSentNotificationsInput,
      UserUncheckedUpdateWithoutSentNotificationsInput
    >;
    create: XOR<
      UserCreateWithoutSentNotificationsInput,
      UserUncheckedCreateWithoutSentNotificationsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSentNotificationsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSentNotificationsInput,
      UserUncheckedUpdateWithoutSentNotificationsInput
    >;
  };

  export type UserUpdateWithoutSentNotificationsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutAuthorNestedInput;
    comments?: CommentUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUpdateManyWithoutUserNestedInput;
    commentLikes?: CommentLikesUpdateManyWithoutUserNestedInput;
    followers?: FollowsUpdateManyWithoutFollowedUserNestedInput;
    following?: FollowsUpdateManyWithoutFollowingUserNestedInput;
    ReceivedNotifications?: NotificationUpdateManyWithoutRecipientNestedInput;
  };

  export type UserUncheckedUpdateWithoutSentNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    postLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput;
    commentLikes?: CommentLikesUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowsUncheckedUpdateManyWithoutFollowedUserNestedInput;
    following?: FollowsUncheckedUpdateManyWithoutFollowingUserNestedInput;
    ReceivedNotifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
  };

  export type PostUpsertWithoutNotificationsInput = {
    update: XOR<
      PostUpdateWithoutNotificationsInput,
      PostUncheckedUpdateWithoutNotificationsInput
    >;
    create: XOR<
      PostCreateWithoutNotificationsInput,
      PostUncheckedCreateWithoutNotificationsInput
    >;
    where?: PostWhereInput;
  };

  export type PostUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: PostWhereInput;
    data: XOR<
      PostUpdateWithoutNotificationsInput,
      PostUncheckedUpdateWithoutNotificationsInput
    >;
  };

  export type PostUpdateWithoutNotificationsInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;
    comments?: CommentUpdateManyWithoutPostNestedInput;
    originalPost?: PostUpdateOneWithoutSharedByNestedInput;
    sharedBy?: PostUpdateManyWithoutOriginalPostNestedInput;
    likes?: PostLikesUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    originalPostId?: NullableIntFieldUpdateOperationsInput | number | null;
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
    sharedBy?: PostUncheckedUpdateManyWithoutOriginalPostNestedInput;
    likes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type CommentUpsertWithoutNotificationsInput = {
    update: XOR<
      CommentUpdateWithoutNotificationsInput,
      CommentUncheckedUpdateWithoutNotificationsInput
    >;
    create: XOR<
      CommentCreateWithoutNotificationsInput,
      CommentUncheckedCreateWithoutNotificationsInput
    >;
    where?: CommentWhereInput;
  };

  export type CommentUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: CommentWhereInput;
    data: XOR<
      CommentUpdateWithoutNotificationsInput,
      CommentUncheckedUpdateWithoutNotificationsInput
    >;
  };

  export type CommentUpdateWithoutNotificationsInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput;
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput;
    likes?: CommentLikesUpdateManyWithoutCommentNestedInput;
  };

  export type CommentUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    likes?: CommentLikesUncheckedUpdateManyWithoutCommentNestedInput;
  };

  export type PostCreateManyAuthorInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    originalPostId?: number | null;
  };

  export type CommentCreateManyAuthorInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    postId: number;
  };

  export type PostLikesCreateManyUserInput = {
    createdAt?: Date | string;
    postId: number;
  };

  export type CommentLikesCreateManyUserInput = {
    createdAt?: Date | string;
    commentId: number;
  };

  export type FollowsCreateManyFollowedUserInput = {
    createdAt?: Date | string;
    followingUserId: number;
  };

  export type FollowsCreateManyFollowingUserInput = {
    createdAt?: Date | string;
    followedUserId: number;
  };

  export type NotificationCreateManyActorInput = {
    id?: number;
    createdAt?: Date | string;
    isRead?: boolean;
    recipientId: number;
    type: $Enums.Event;
    postId?: number | null;
    commentId?: number | null;
  };

  export type NotificationCreateManyRecipientInput = {
    id?: number;
    createdAt?: Date | string;
    isRead?: boolean;
    actorId: number;
    type: $Enums.Event;
    postId?: number | null;
    commentId?: number | null;
  };

  export type PostUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutPostNestedInput;
    originalPost?: PostUpdateOneWithoutSharedByNestedInput;
    sharedBy?: PostUpdateManyWithoutOriginalPostNestedInput;
    likes?: PostLikesUpdateManyWithoutPostNestedInput;
    notifications?: NotificationUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    originalPostId?: NullableIntFieldUpdateOperationsInput | number | null;
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
    sharedBy?: PostUncheckedUpdateManyWithoutOriginalPostNestedInput;
    likes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    originalPostId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type CommentUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput;
    likes?: CommentLikesUpdateManyWithoutCommentNestedInput;
    notifications?: NotificationUpdateManyWithoutCommentNestedInput;
  };

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    postId?: IntFieldUpdateOperationsInput | number;
    likes?: CommentLikesUncheckedUpdateManyWithoutCommentNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutCommentNestedInput;
  };

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    postId?: IntFieldUpdateOperationsInput | number;
  };

  export type PostLikesUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutLikesNestedInput;
  };

  export type PostLikesUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    postId?: IntFieldUpdateOperationsInput | number;
  };

  export type PostLikesUncheckedUpdateManyWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    postId?: IntFieldUpdateOperationsInput | number;
  };

  export type CommentLikesUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    comment?: CommentUpdateOneRequiredWithoutLikesNestedInput;
  };

  export type CommentLikesUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    commentId?: IntFieldUpdateOperationsInput | number;
  };

  export type CommentLikesUncheckedUpdateManyWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    commentId?: IntFieldUpdateOperationsInput | number;
  };

  export type FollowsUpdateWithoutFollowedUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followingUser?: UserUpdateOneRequiredWithoutFollowingNestedInput;
  };

  export type FollowsUncheckedUpdateWithoutFollowedUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followingUserId?: IntFieldUpdateOperationsInput | number;
  };

  export type FollowsUncheckedUpdateManyWithoutFollowedUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followingUserId?: IntFieldUpdateOperationsInput | number;
  };

  export type FollowsUpdateWithoutFollowingUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedUser?: UserUpdateOneRequiredWithoutFollowersNestedInput;
  };

  export type FollowsUncheckedUpdateWithoutFollowingUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedUserId?: IntFieldUpdateOperationsInput | number;
  };

  export type FollowsUncheckedUpdateManyWithoutFollowingUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedUserId?: IntFieldUpdateOperationsInput | number;
  };

  export type NotificationUpdateWithoutActorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
    recipient?: UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput;
    post?: PostUpdateOneWithoutNotificationsNestedInput;
    comment?: CommentUpdateOneWithoutNotificationsNestedInput;
  };

  export type NotificationUncheckedUpdateWithoutActorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    recipientId?: IntFieldUpdateOperationsInput | number;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
    commentId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type NotificationUncheckedUpdateManyWithoutActorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    recipientId?: IntFieldUpdateOperationsInput | number;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
    commentId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type NotificationUpdateWithoutRecipientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
    actor?: UserUpdateOneRequiredWithoutSentNotificationsNestedInput;
    post?: PostUpdateOneWithoutNotificationsNestedInput;
    comment?: CommentUpdateOneWithoutNotificationsNestedInput;
  };

  export type NotificationUncheckedUpdateWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    actorId?: IntFieldUpdateOperationsInput | number;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
    commentId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type NotificationUncheckedUpdateManyWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    actorId?: IntFieldUpdateOperationsInput | number;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
    commentId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type CommentCreateManyPostInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
  };

  export type PostCreateManyOriginalPostInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
  };

  export type PostLikesCreateManyPostInput = {
    createdAt?: Date | string;
    userId: number;
  };

  export type NotificationCreateManyPostInput = {
    id?: number;
    createdAt?: Date | string;
    isRead?: boolean;
    recipientId: number;
    actorId: number;
    type: $Enums.Event;
    commentId?: number | null;
  };

  export type CommentUpdateWithoutPostInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput;
    likes?: CommentLikesUpdateManyWithoutCommentNestedInput;
    notifications?: NotificationUpdateManyWithoutCommentNestedInput;
  };

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    likes?: CommentLikesUncheckedUpdateManyWithoutCommentNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutCommentNestedInput;
  };

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
  };

  export type PostUpdateWithoutOriginalPostInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;
    comments?: CommentUpdateManyWithoutPostNestedInput;
    sharedBy?: PostUpdateManyWithoutOriginalPostNestedInput;
    likes?: PostLikesUpdateManyWithoutPostNestedInput;
    notifications?: NotificationUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutOriginalPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
    sharedBy?: PostUncheckedUpdateManyWithoutOriginalPostNestedInput;
    likes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateManyWithoutOriginalPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
  };

  export type PostLikesUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPostLikesNestedInput;
  };

  export type PostLikesUncheckedUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: IntFieldUpdateOperationsInput | number;
  };

  export type PostLikesUncheckedUpdateManyWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: IntFieldUpdateOperationsInput | number;
  };

  export type NotificationUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
    recipient?: UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput;
    actor?: UserUpdateOneRequiredWithoutSentNotificationsNestedInput;
    comment?: CommentUpdateOneWithoutNotificationsNestedInput;
  };

  export type NotificationUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    recipientId?: IntFieldUpdateOperationsInput | number;
    actorId?: IntFieldUpdateOperationsInput | number;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
    commentId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type NotificationUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    recipientId?: IntFieldUpdateOperationsInput | number;
    actorId?: IntFieldUpdateOperationsInput | number;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
    commentId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type CommentLikesCreateManyCommentInput = {
    createdAt?: Date | string;
    userId: number;
  };

  export type NotificationCreateManyCommentInput = {
    id?: number;
    createdAt?: Date | string;
    isRead?: boolean;
    recipientId: number;
    actorId: number;
    type: $Enums.Event;
    postId?: number | null;
  };

  export type CommentLikesUpdateWithoutCommentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCommentLikesNestedInput;
  };

  export type CommentLikesUncheckedUpdateWithoutCommentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: IntFieldUpdateOperationsInput | number;
  };

  export type CommentLikesUncheckedUpdateManyWithoutCommentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: IntFieldUpdateOperationsInput | number;
  };

  export type NotificationUpdateWithoutCommentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
    recipient?: UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput;
    actor?: UserUpdateOneRequiredWithoutSentNotificationsNestedInput;
    post?: PostUpdateOneWithoutNotificationsNestedInput;
  };

  export type NotificationUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    recipientId?: IntFieldUpdateOperationsInput | number;
    actorId?: IntFieldUpdateOperationsInput | number;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type NotificationUncheckedUpdateManyWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isRead?: BoolFieldUpdateOperationsInput | boolean;
    recipientId?: IntFieldUpdateOperationsInput | number;
    actorId?: IntFieldUpdateOperationsInput | number;
    type?: EnumEventFieldUpdateOperationsInput | $Enums.Event;
    postId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
