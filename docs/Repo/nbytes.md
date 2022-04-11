  
<iframe src="https://www.youtube.com/embed/o9oCJSaFV-I" height="480" width="640" allowFullScreen></iframe>
<hr />

Nathaniel  
nbytes is a useful little crate. And the way nbytes works is really simple. Very oftentimes, we need to define constants. And those constants are like two megabytes. But then you always wonder, like, did you calculate it correctly, or when you're reviewing someone else's code, you know, you don't know whether it's calculated correctly or not. And so nbytes is just simply a little crate with a macro in it called bytes. And it allows you to define this as two kilobytes. And then all the math is done correctly. And so you can now look at it and the size that's actually being done in this constant is now apparent. So yeah, this crate is not like a lot of code. It's not maybe super, super popular crate or anything, but use it if you have a constant. Feel free to use this because the only thing that's in this is macro. It'll compile out at compile time, but I think it makes things a lot more readable. Again, we care about auditing a lot.
