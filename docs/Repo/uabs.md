  
<iframe src="https://www.youtube.com/embed/ouh51m6ccQA" height="480" width="640" allowFullScreen></iframe>
<hr />

Nathaniel  
uabs is a little tiny crate that's somewhat interesting. So uabs is just simply a trait that contains a function, which calculates the absolute value of the input but returns it as an unsigned integer. So one of the things that is frustrating about the absolute value in the standard library is that if you're doing an absolute value on a signed integer, it still returns a signed integer. But we obviously know that the absolute value of a signed integer is always going to be unsigned. So we always want to return the unsigned equivalent.
