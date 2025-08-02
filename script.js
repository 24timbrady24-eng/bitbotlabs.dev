document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Script is running");

  const btn = document.querySelector(".launch-huddle");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("🚀 Huddle Room Activated!");
    });
  } else {
    console.error("❌ Button with .launch-huddle not found.");
  }
});
