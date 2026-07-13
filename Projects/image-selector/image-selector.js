async function getRandomFeaturedImage(tags = "") {
  const params = new URLSearchParams({
    tags: `${tags} random:1`.trim(), // random:1 tells Danbooru to return 1 random matching post
    limit: 1
  });

  const res = await fetch(`https://safebooru.donmai.us/posts.json?${params}`);
  const posts = await res.json();
  const post = posts[0];

  console.log(post)

  if (!post) return null;

  return {
    imageUrl: post.file_url || post.large_file_url,
    previewUrl: post.preview_file_url,
    postUrl: `https://safebooru.donmai.us/posts/${post.id}`,
    artist: post.tag_string_artist || "Unknown artist",
    width: post.image_width,
    height: post.image_height,
  };
}

async function setRandomImages() {
    var image_containers = document.getElementsByClassName("danbooru-sel")
    for (let i = 0; i < image_containers.length; i++){
        var random_image = await getRandomFeaturedImage("renamon"); // because it's a renamon themed website, duh.
        image_containers[i].src = random_image.imageUrl;
        
        var credit = document.getElementById("art-credit")
        credit.innerText = `Art by: ${random_image.artist}`
    }
}