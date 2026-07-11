# ADR-001

Title

Service Request as the Core Domain Object

Status

Accepted

Date

11 July 2026

---

## Context

We needed to decide whether the primary entity of the system should be Booking or Service Request.

A customer does not immediately book a professional.

Instead, they first describe their problem.

Professionals then review the request before deciding whether to accept it.

---

## Decision

The core entity of SkillConnect will be Service Request.

Bookings will only exist after a professional accepts a request.

---

## Why

This design better represents the real workflow used by customers and professionals.

It also provides flexibility for future features like:

- Estimates
- Multiple offers
- Rescheduling
- Cancellation
- Status tracking

---

## Consequences

Benefits

- More flexible architecture
- Easier future expansion
- Better business representation

Trade-offs

- Slightly more complex than direct booking
- Additional state transitions are required