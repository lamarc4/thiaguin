class Event {
    constructor(title, date, description) {
        this.title = title;
        this.date = date;
        this.description = description;
    }

    getFormattedDate() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(this.date).toLocaleDateString('pt-BR', options);
    }

    renderEventCard() {
        return `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text">Data: ${this.getFormattedDate()}</p>
                    <p class="card-text">${this.description}</p>
                </div>
            </div>
        `;
    }
}

class EventFactory {
    static createEvent(title, date, description) {
        return new Event(title, date, description);
    }
}

export default EventFactory;
