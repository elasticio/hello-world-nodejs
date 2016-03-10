# Library of programs and configurations

> These programs and configuration files must be linked from the ``component.json`` file residing in the main component directory. It is not a requirement to keep your programs and configurations here, this is just a suggestion.

## Actions and Triggers

If your component is programmed to work as **Action** and **Trigger** functions then it can for example be separated into different directories and this is what is done here. Our documentation on these [basic concepts](http://docs.elastic.io/docs/basic-concepts) has more on these definitions.

## Schemas

In this directory we keep the configurations which correspond to Actions and Triggers functions used. We found this easier to manage, however it is upto each coder to make their own component structure. There is only one requirement:

> The configuration files should be properly linked in ``component.json`` file.
