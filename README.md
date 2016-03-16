# hello-world-nodejs

[![Join the chat at https://gitter.im/elasticio/hello-world-nodejs](https://badges.gitter.im/elasticio/hello-world-nodejs.svg)](https://gitter.im/elasticio/hello-world-nodejs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
> Hello World Node.js component template for the [elastic.io platform](http://www.elastic.io "elastic.io platform")

This is a component template which we commonly refer as **the first step of the development** for creating a component to deploy into our platform. This component comes with a basic architecture which can be used on our platform. You can clone it and use it. However, **if you plan to deploy it into [elastic.io platform](http://www.elastic.io "elastic.io platform") you must follow sets of instructions to succseed**. 

## Before you Begin

Before you can deploy any code into our system **you must be a registered elastic.io platform user**. Please see our home page at [http://www.elastic.io](http://www.elastic.io) to learn how. 

> Any attempt to deploy a code into our platform without a registration would be rejected.

After the registration and opening of the account you must **[upload your SSH Key](http://docs.elastic.io/docs/ssh-key)** into our platform. 

> If you fail to upload you SSH Key you will get **persmission denied** error during the deployment.

## Getting Started

After registration and uploading of your SSH Key you can proceed to deploy it into our system. At this stage we suggest you to:
* [Create a team](http://docs.elastic.io/docs/teams) to work on your new component. This is not required but will be automatically created using random naming by our system so we suggest you name your team accordingly.
* [Create a repository](http://docs.elastic.io/docs/component-repositories) wher your new component is going to *reside* inside the team that you have just created.

```bash
$ git clone https://github.com/elasticio/hello-world-nodejs.git your-repository

$ cd your-repository
```
Now you can edit your version of **hello-world-nodejs** component and build your desired component. Or you can just ``PUSH``it into our system to see the process in action:

```bash
$ git remote add elasticio your-team@git.elastic.io:your-repository.git

$ git push elasticio master
```
Obviously the naming of your team and repository is entierly upto you and if you do not put any corresponding naming our system will auto generate it for you but the naming might not entierly correspond to your project requirements.

## File Structure

The structure of **hello-world-nodejs** component is quite flexible. [elastic.io platform](http://www.elastic.io "elastic.io platform") expects only two files to be present in the main directory. These are the ``component.json`` and ``package.json``. Our documentation on [how to build a component in node.js](http://docs.elastic.io/docs/building-a-component-in-nodejs) has more about each file and their function.
