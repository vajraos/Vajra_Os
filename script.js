document.addEventListener("DOMContentLoaded", () => {
  setActiveNav("home"); // Default active link
  console.log("VajraOS Community loaded successfully!");
});

// Search handler
function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById("searchInput").value.trim();
  if (query) alert(`Searching for: ${query}`);
  else alert("Please enter something to search.");
  return false;
}

// Highlight active link
function setActiveNav(section) {
  const links = document.querySelectorAll(".nav-links a");
  links.forEach(link => link.classList.remove("active"));

  const active = document.querySelector(`.nav-links a[data-section="${section}"]`);
  if (active) active.classList.add("active");
}

// Load section dynamically
function loadSection(section) {
  setActiveNav(section);
  const feed = document.getElementById("feed-section");

  // If HOME — just reset feed to default, do not alter layout
  if (section === "home") {
    feed.innerHTML = `
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
      </div>`;
    return;
  }

  // For other sections, just replace main feed content — not whole layout
  let sectionContent = "";

  switch (section) {
    case "groups":
      sectionContent = `<h2>Groups</h2><p>Here you’ll see all active groups and can join or create your own.</p>`;
      break;
    case "members":
      sectionContent = `<h2>Members</h2><p>Browse and connect with community members here.</p>`;
      break;
    case "blogs":
      sectionContent = `<h2>Blogs</h2><p>Read the latest community blog posts and articles.</p>`;
      break;
    case "shop":
      sectionContent = `<h2>Shop</h2><p>Find VajraOS merch and digital products here soon!</p>`;
      break;
  }

  feed.innerHTML = sectionContent;
}
