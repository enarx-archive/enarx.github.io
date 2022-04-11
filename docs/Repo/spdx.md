  
<iframe src="https://www.youtube.com/embed/xgiogPdVbFw" height="480" width="640" allowFullScreen></iframe>
<hr />

Nathaniel  
spdx. Okay, so this is not Rust code, this is Python. And the purpose of this is to justify a GitHub action. And this action in particular checks that at the top of your source code files, that you have an spdx header. And the spdx header defines what license the code is in. And the point here is that if you create a new file, we should have a test that fails if you don't put the license in the file.

So that's actually reusable. Other projects can use that as a GitHub action, you know, it's completely legit to use that anywhere. It has support for a variety of languages and adding new languages is pretty easy. So you can see here, like we've got a bunch of interpreters here. This is how we can guess what languages. We also have mappings for file extensions. So like .py is Python, and .c is C and so forth. And then you basically have a set of regular expressions that help define whether there's blocked comments or not and what the comments syntax is, in the language that you're actually parsing and then that determines whether or not the spdx header is present.
