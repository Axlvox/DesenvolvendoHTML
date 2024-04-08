function filterCards() {
    document.getElementById('searchInput').addEventListener('input', function() {
        var searchTerm = this.value.toLowerCase();

        var cards = document.querySelectorAll('.card');

        cards.forEach(function(card) {
            var plantName = card.querySelector('.title').textContent.toLowerCase();

            if (plantName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

filterCards();
