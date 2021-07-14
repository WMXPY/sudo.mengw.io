---
title: Generate UUID with @sudoo/uuid
layout: default
---

# Generate UUID with `@sudoo/uuid`

View document of `@sudoo/uuid` at <https://uuid.sudo.dog>

## Why UUID

UUID is an Identifier system that can be generated locally and is almost impossible to duplicate.  
Compared with other ID generation methods, UUID does not need to rely on other parts, and there are a variety of flexible generation methods.

`@sudoo/uuid` provides a variety of lightweight, standard-compliant UUID generation functions.

## Use `@sudoo/uuid`

`@sudoo/uuid` has not extra dependencies. Use the following code in your project to install.

{% include copyable-highlight.html
    language="shell"
    file="install-uuid.sh"
%}

{% include curl-link.html file="install-uuid.sh" %}

Use the package is also simple.

The following example shows how to create V1 uuid with `@sudoo/uuid`. V1 uuid generate by current timestamp, sequence, and random node number. Also, all uuid has technic to preset its uuid version number. 

{% include copyable-highlight.html
    language="typescript"
    file="example-1.ts"
%}

V4 uuid is generated entirely with random numbers. Use the following code to generate V4 uuid with `@sudoo/uuid`.

{% include copyable-highlight.html
    language="typescript"
    file="example-2.ts"
%}
