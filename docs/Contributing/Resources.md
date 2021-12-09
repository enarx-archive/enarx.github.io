# Resources

Here are a few resources to help you get started with contributing to Enarx (and to free and open source projects in general).

The idea here is to get you familiarised with the contribution process and the tools in a general sense, and used to the project itself which is rather complex, allowing you to be "waiting, but not idle" as you find where you want to contribute.

## Learn about contributing to open source
If you are new to contributing, [Opensource.com's guide on how to contribute](https://opensource.guide/how-to-contribute/) is a good place to start.

## Learn how to use Markdown
Enarx makes extensive use of Github functionality, which in turns relies on Markdown as a way to write and format text (both code and documents). If you are unfamiliar with Markdown, you learn more about [mastering Markdown](https://guides.github.com/features/mastering-markdown/).

### Testing out Markdown in Github
If you'd like to be able to make experiments in using Markdown on github, you can use the wiki in your personal fork of Enarx, such as:  
`https://github.com/<your_github_username>/enarx/wiki`  
You'll have to fork the Enarx git repository first, a step which is covered in the wiki article on [how to contribute code](https://github.com/enarx/enarx/wiki/How-to-contribute-code#on-the-github-side). (You can also follow other guides online on how to fork a Github repo to your own account, such as step 2 on [this guide](https://www.dataschool.io/how-to-contribute-on-github/).)


#### About wrapping text
It is common practice to "wrap" text at a certain number of characters, that is, make each line no more than a certain number of characters. In the Enarx project, we wrap text at 80 characters.

How to configure your text editor or [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) to to do so will vary. However, you can always use the following command to show a wrapped version of your text at 80 characters, provided you are using a UNIX-based system (Linux, BSD, macOS):  
`fold -w 80 -s my_text_file.txt`

To directly save that output to a new file:  
`fold -w 80 -s my_text_file.txt > my_text_file_wrapped.txt`

## Create a Github account
To contribute to Enarx, you will need a Github account to be able to open issues (see below), [contribute code](Code) or help [improve the documentation](Docs). You can create one [here](https://github.com/join).

Note that you do not need to use your personal information to create an account if you don't feel comfortable using your real name, for instance. Friendly reminder however that the [Code of Conduct](https://github.com/enarx/.github/blob/master/CODE_OF_CONDUCT.md) still applies, of course.

## Join the chat
As mentioned on the main [how to contribute page](Introduction), you can join the chat at [chat.enarx.dev](https://chat.enarx.dev) and come say hi, ask questions, or just read the conversation.

## Understand how "issues" work
One of the Github functionalities we make heavy use of are "issues", which is a generic term to describe things we want to keep track of, bugs or improvement ideas.
Github has several explainers on issues:
- [Mastering issues](https://guides.github.com/features/issues/)
- [About issues](https://help.github.com/en/github/managing-your-work-on-github/about-issues)

You can see the Enarx issues [here](https://github.com/enarx/enarx/issues)

## Understand what issues boards are
We use "boards" to collect all issues related to one aspect of the project, such as the project's technical infrastructure, everything that has to do with WebAssembly, or conferences at which the project may be presented.

You can see the various boards (projects, in Github parlance) here: https://github.com/enarx/enarx/projects

## Join meetings & board review
Also mentioned on the main how to contribute page, we host regular meetings where you can come say hi, ask questions, or just listen to learn more about what's happening in the project.

The full Enarx calendar is available as a [Google Calendar](https://calendar.google.com/calendar/embed?src=leatqk15m1f34loatvatftkm48%40group.calendar.google.com&ctz=America%2FNew_York).

The meetings happen on [Jitsi Meet](https://meet.jit.si/EnarxDaily). (You do not need any account to join.)

To join these meetings, you can:
- open [the link](https://meet.jit.si/EnarxDaily) in your usual browser
  -and give access to microphone and camera, as you see fit
- download the Jitsi Meet mobile app (Android: [Google Play](https://play.google.com/store/apps/details?id=org.jitsi.meet) or [F-Droid](https://f-droid.org/en/packages/org.jitsi.meet/), [iOS](https://apps.apple.com/us/app/jitsi-meet/id1165103905)
  -  then enter the meeting ID (`EnarxDaily`)
- dial-in by phone: +1.512.647.1431,,3117518640# or [visit this link](https://meet.jit.si/static/dialInInfo.html?room=EnarxDaily) to see more numbers.


### In-meeting tips:
- when someone's screen is being presented, you can click layout button at the bottom of the interface to switch layouts and get more in your screen (the four squares titled "Toggle tile view").

## Anything else?
That's it! At this point, you should have everything you need to start contributing. If you feel anything is missing here, please let us know.
