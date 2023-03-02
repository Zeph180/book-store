export default function AddBookForm() {
  return (
    <form>
      <h3>ADD NEW BOOK</h3>
      <input
        type="text"
        placeholder="Book title"
      />

      <input
        type="text"
        placeholder="Author"
      />
      <button type="submit">Add Book</button>
    </form>
  );
}
