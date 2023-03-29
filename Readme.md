# FST-R example repo to deprecate generate-it

## High level goal

Progressively deprecate generate-it with something more modular.

### Why not just another template?

Generate-it at its core, is not modular. It handles about 10-15 different parts. While theoretically one can just create a new template, it is very hard to just swap one of those parts.

Also, the templates are coupled to the core in a bunch of different ways, like making use of "handler functions" that are implemented in the core.

### Steps

1. Remove a specific part from generate-it
2. Implement that part with a different tool

