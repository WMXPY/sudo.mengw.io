---
title: Display Human Readable Identifier with @sudoo/readable-identifier
layout: default
---

# Display Human Readable Identifier with `@sudoo/readable-identifier`

View document of `@sudoo/readable-identifier` at <https://readable-identifier.sudo.dog>

## No one likes garbled stuff

It is a common way to store data in a database with almost meaningless strings like UUID and ObjectID.

However, it is unfriendly to display meaningless strings to end-users. For non-developers, we can display the main fields of data in other ways that are readable and hard to repeat. Introducing `@sudoo/readable-identifier`.

## Generate Identifier

Install `@sudoo/readable-identifier` is easy. Simply run the following command in your project folder.

{% include copyable-highlight.html
    language="shell"
    file="install-readable-identifier.sh"
%}

{% include curl-link.html file="install-readable-identifier.sh" %}

Also, if no `@sudoo/words` dictionary instance is created or planned to be created. We also provide `@sudoo/words-english` as the default dictionary for identifier generation. Install it with the following commands.

{% include copyable-highlight.html
    language="shell"
    file="install-words-english.sh"
%}

{% include curl-link.html file="install-words-english.sh" %}

A generate instance can create any `@sudoo/words` dictionary instance.

{% include copyable-highlight.html
    language="typescript"
    file="example-1.ts"
%}

That's it. All setup is completed. We not can use the generator everywhere else.

{% include copyable-highlight.html
    language="typescript"
    file="example-2.ts"
%}

For the same dictionary and identifier, the generation result will always be identical, so it's safe to use the readable identifier to represent your data resource.
