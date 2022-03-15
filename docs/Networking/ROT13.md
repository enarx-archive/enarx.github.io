# ROT13

This example modifies the TCP Echo Server presented before with a simple modification. The TCP server listens to the client, but echoes back the normal data along with the ROT13ed version of data.

<iframe src="https://www.youtube.com/embed/WZRv3mQDqsY" height="480" width="640" allowFullScreen></iframe>
&nbsp;

The ROT13 cipher is presented below:
```
if bytes_read != 0 {
    let received_data = &received_data[..bytes_read];
    let s = String::from_utf8_lossy(received_data);
    if let Ok(str_buf) = from_utf8(received_data) {
        let mut coded_string = String::from("");
	    for c in s.chars(){
            let charcode = c as u32;
            if c.is_lowercase(){
                let a_code = 'a' as u32;
                let rotcode = ((charcode - a_code +13)%26) + a_code;
                coded_string.push(char::from_u32(rotcode).unwrap());
            }
            else if c.is_uppercase(){
                let a_code = 'A' as u32;
                let rotcode = ((charcode - a_code + 13)%26) + a_code;
                coded_string.push(char::from_u32(rotcode).unwrap());
            }
            else{
                coded_string.push(c);
            }
        }
        println!("Received encrypted data: {}", str_buf);
        println!("Decrypted received data: {}", coded_string);
    }
}
```

Although simple in implementation, this ROT13 networking demo could be the basis of a encryption/decryption service running in a Trusted Execution Environment.