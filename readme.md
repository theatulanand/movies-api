# Movie API

```bash
GET /movies
```

## Search

```bash
GET /movies?q=gol
```

## Filter by Type

```bash
GET /movies?type=movies
```

## Filter by release year

```bash
/movies?year=gt-1983 // for greater than
/movies?year=lt-2001 // for less than
```

## Pagination

```bash
GET /movies?page=1&limit=10
```
