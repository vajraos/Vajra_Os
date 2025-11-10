document.addEventListener("DOMContentLoaded", () => {
  console.log("VajraOS Community loaded successfully!");
});

// Search Handler
function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
  } else {
    alert("Please enter something to search.");
  }
  return false;
}

// Dynamic Section Loading (for Groups, Members, etc.)
function loadSection(section) {
  const main = document.getElementById("main-content");
  let content = "";

  switch (section) {
    case "groups":
      content = `
        <h2>Groups</h2>
        <p>Here you’ll see all active groups and can join or create your own.</p>`;
      break;
    case "members":
      content = `
        <h2>Members</h2>
        <p>Browse and connect with community members here.</p>`;
      break;
    case "blogs":
      content = `
        <h2>Blogs</h2>
        <p>Read the latest community blog posts and articles.</p>`;
      break;
    case "shop":
      content = `
        <h2>Shop</h2>
        <p>Find VajraOS merch and digital products here soon!</p>`;
      break;
    default:
      content = `
        <section class="main-feed">
          <div class="feed-header">
            <h2>What's New</h2>
            <button class="create-post-btn">+ Create Post</button>
          </div>
          <div class="posts">
            <article class="post">
              <h3>Post Title 1</h3>
              <p>This is a sample post content. Later we’ll load real posts here.</p>
            </article>
            <article class="post">
              <h3>Post Title 2</h3>
              <p>This is another example post.</p>
            </article>
          </div>
        </section>`;
  }

  main.innerHTML = content;
}
