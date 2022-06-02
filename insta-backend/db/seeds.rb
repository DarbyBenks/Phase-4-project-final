u1 = User.create(username: "joe", phoneNum: "1234567890", email: "example@gmail.com", password_digest: "password")  # 1

p1 = Post.create(content: "This is a post", location: "San Francisco", user_id: u1.id)  # 2