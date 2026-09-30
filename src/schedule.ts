

const SCHEDULE_ENDPOINT = "https://team.tamuhack.org/api/th26";
const TIME_ZONE = "America/Chicago";

const weekdayFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
});



async function fetchSchedule(): Promise<ScheduleEvent[] | null> {
    try {
        const response = await fetch(SCHEDULE_ENDPOINT);
        if (!response.ok) {
            console.warn(
                `[schedule] ${SCHEDULE_ENDPOINT} returned ${response.status}`,
            );
            return null;
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
            console.warn("[schedule] expected an array of events");
            return null;
        }
        return data as ScheduleEvent[];
    } catch (error) {
        console.warn(`[schedule] could not reach ${SCHEDULE_ENDPOINT}`, error);
        return null;
    }
}

function eventsForDay(events: ScheduleEvent[], weekday: string) {
    return events
        .filter(
            (event) =>
                weekdayFormatter.format(new Date(event.date)) === weekday,
        )
        .sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        );
}


function scopeAttribute(card: HTMLElement): string | null {
    for (const attribute of card.attributes) {
        if (attribute.name.startsWith("data-astro-cid-")) {
            return attribute.name;
        }
    }
    return null;
}

function createSpan(
    className: string,
    text: string,
    scope: string | null,
): HTMLSpanElement {
    const element = document.createElement("span");
    element.className = className;
    if (text) {
        element.textContent = text;
    }
    if (scope) {
        element.setAttribute(scope, "");
    }
    return element;
}

function renderEntries(card: HTMLElement, events: ScheduleEvent[]) {
    const list = card.querySelector(".schedule-day-events");
    if (!list) {
        return;
    }
    const scope = scopeAttribute(card);
    const entries = document.createDocumentFragment();

    for (const event of events) {
        const item = document.createElement("li");
        item.className = "schedule-entry";
        if (scope) {
            item.setAttribute(scope, "");
        }

        const detail = createSpan("schedule-entry-detail", "", scope);
        detail.append(
            createSpan("schedule-entry-name", event.eventName, scope),
        );
        if (event.location) {
            detail.append(
                createSpan("schedule-entry-location", event.location, scope),
            );
        }

        item.append(
            createSpan(
                "schedule-entry-time",
                timeFormatter.format(new Date(event.date)),
                scope,
            ),
            detail,
        );
        entries.append(item);
    }

    list.replaceChildren(entries);
}

const cards = document.querySelectorAll<HTMLElement>(
    ".schedule-day[data-weekday]",
);

if (cards.length > 0) {
    fetchSchedule().then((events) => {
        if (events === null) {
            return;
        }
        for (const card of cards) {
            const weekday = card.dataset.weekday;
            if (weekday) {
                renderEntries(card, eventsForDay(events, weekday));
            }
        }
    });
}

