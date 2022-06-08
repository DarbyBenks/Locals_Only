Post.destroy_all

puts "creating Posts"

p1 = Post.create(title: "Hanging Lake", img_url: "https://images.squarespace-cdn.com/content/v1/5cd9abdac46f6d19acd6a1d0/1626364203425-7T26KNL3IPOIK90THU02/Travels+and+Curiosities+-+hidden+lakes+in+colorado.JPEG?format=1500w", description: "Hanging Lake near Glenwood Springs, Colorado has become such a popular hike that a day pass is now required to visit the site. Permits are $12 per person and are booked in hourly arrival windows. If you’re traveling here during the summer months, you’ll need to look at booking these well in advance.", location: "39.6014° N, 107.1918° W")
p2 = Post.create(title: "Paint Mines Interpretive Park", img_url: "https://images.squarespace-cdn.com/content/v1/5cd9abdac46f6d19acd6a1d0/1626365005283-SE5G1TXOYXVFYLINAV5X/Travels+and+Curiosities+-++top+places+to+visit+in+colorado.JPEG?format=1500w", description: "Paint Mines Interpretive Park is a Colorado hidden gem that even some lifelong natives haven’t heard of. Tucked away in rural El Paso County east of Colorado Springs, the colorful clays within the park (the result of oxidized iron compounds) were once collected by Native Americans to make pigments for ceramics. Open and free to the public from dawn to dusk, the site is a popular draw for hikers, photographers, and artists, and there are several different trails and overlooks to explore. Climbing on these delicate rock formations is forbidden as are pets of any kind so definitely leave your dog at home.", location: "39.0207° N, 104.2744° W")
p3 = Post.create(title: "Bishop Castle", img_url:"https://images.squarespace-cdn.com/content/v1/5cd9abdac46f6d19acd6a1d0/1626447136788-MUKL5EKNMGESMROX5X1K/Travels+and+Curiosities+-++hidden+gems+in+colorado.JPEG?format=1500w", description: "Tucked away in San Isabel National Forest southwest of Pueblo, Colorado is a wondrous and whimsical castle constructed of iron and stone that is the result of the lifelong passion of Colorado native, Jim Bishop, who bought the land when he was just 15 years old for $450. A monumental build, both in height and in years spent, the website for Bishop Castle heralds the feat and Bishop’s motivations as a reminder to the importance of not only having a dream but sticking to it “no matter what.” ", location: "38.0614° N, 105.0944° W")
# Post.create(title: "", img_url:"", description: "", location: "")

puts "finsihed seeding posts"

puts "seeding comments"
c1 = Comment.create(comment: "This is a great place to visit!", post_id: p1.id)
c2 = Comment.create(comment: "Such a cool location!", post_id: p2.id)
c3 = Comment.create(comment: "WOW! JUST WOW!", post_id: p3.id)

puts "finished seeding comments"
puts "finsihed seeding"