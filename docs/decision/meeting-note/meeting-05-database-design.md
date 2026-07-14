# Meeting 05 - Database Design

## Decisions

- Introduced separate User collection for authentication.
- Professional profile stores business information only.
- Phone numbers are stored as String.
- Categories are stored as an array of enums.
- Soft delete strategy using isActive.
- Store both city/area and GeoJSON location.

## Why

Authentication is shared by multiple user roles.
Business profile and authentication have different responsibilities.