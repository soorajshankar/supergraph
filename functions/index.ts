
// functions/index.ts

import { Hash, encode } from "https://deno.land/x/checksum@1.2.0/mod.ts";

export function make_bad_password_hash(pw: string): string {
  return new Hash("md5").digest(encode(pw)).hex();
}

/**
 * Returns the github bio for the userid provided
 *
 * @param username - Username of the user who's bio will be fetched.
 * @returns The github bio for the requested user.
 * @pure This function should only query data without making modifications
 */
export async function get_github_profile_description(username: string): Promise<string> {
  const foo = await fetch(`https://api.github.com/users/${username}`);
  const response = await foo.json();
  return response.bio;
}

export function make_array(): Array<string> {
  return ['this', 'is', 'an', 'array']
}

type MyObjectType = {'foo': string, 'baz': Boolean}

export function make_object(): MyObjectType {
  return { 'foo': 'bar', 'baz': true}
}

export function make_object_array(): Array<MyObjectType> {
  return [make_object(), make_object()]
}

/**
 * @pure
 */
export function has_optional_args(a: string, b?: string) {
  if(b) {
    return `Two args: ${a} ${b}`;
  } else {
    return `One arg: ${a}`;
  }
}