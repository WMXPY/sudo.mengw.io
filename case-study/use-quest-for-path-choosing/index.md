---
title: Use @sudoo/quest for Path Choosing
layout: default
---

# Use `@sudoo/quest` for Path Choosing

View document of `@sudoo/quest` at <https://quest.sudo.dog>

## The Old Way

In web back-end applications, there are many behaviors that change according to the permissions and requests passed in by users.

For example, in NodeJS, we can use the following code to do that.

{% include copyable-highlight.html
    language="typescript"
    file="old-way.ts"
%}

This way is very effective until the request becomes complicated, and more importantly, these conditions cannot be reused gracefully in different APIs.

## The `@sudoo/quest` Way

Install `@sudoo/quest` is easy, simply run the following command in your project folder.

{% include copyable-npm-package.html
    package="@sudoo/quest"
%}

{% include copyable-highlight.html
    language="typescript"
    file="example-1.ts"
%}

Implementing same feature, we use more code, but in fact, in different APIs, we can use quest distributer to extract the reused part.

{% include copyable-highlight.html
    language="typescript"
    file="example-2.ts"
%}
