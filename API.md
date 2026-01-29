# LingEdu API Documentation

## Overview

RESTful API built with Next.js API Routes. All responses follow a standard format.

## Base URL
```
http://localhost:3000/api
```

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Optional success message"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "message": "Error message",
    "code": "ERROR_CODE",
    "details": { ... }
  }
}
```

---

## Endpoints

### 1. Contact Forms

#### Submit Contact Form
```http
POST /api/contact
```

**Request Body:**
```json
{
  "fullname": "string (2-255 chars, required)",
  "email": "valid email (required)",
  "phone": "string (optional, max 20 chars)",
  "subject": "string (optional, max 255 chars)",
  "message": "string (10-5000 chars, required)",
  "terms_accepted": "boolean (must be true, required)"
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "id": 1,
    "fullname": "John Doe",
    "email": "john@example.com",
    "phone": "+905551234567",
    "subject": "Genel",
    "message": "I want to learn more about your courses...",
    "status": "pending",
    "created_at": "2026-01-29T10:00:00Z"
  },
  "message": "Contact form submitted successfully"
}
```

#### Get All Contact Forms (Admin)
```http
GET /api/contact
```

**Response:** `200 OK`

#### Get Contact Form by ID (Admin)
```http
GET /api/contact/:id
```

**Response:** `200 OK`

#### Delete Contact Form (Admin)
```http
DELETE /api/contact/:id
```

**Response:** `200 OK`

---

### 2. Testimonials

#### Get All Active Testimonials
```http
GET /api/testimonials
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "client_fullname": "Elif Yılmaz",
      "client_job": "Yazılım Mühendisi",
      "comment": "IELTS hazırlık kursu sayesinde...",
      "rating": 5,
      "is_active": true,
      "created_at": "2026-01-29T10:00:00Z"
    }
  ],
  "message": "Testimonials retrieved successfully"
}
```

#### Create Testimonial (Admin)
```http
POST /api/testimonials
```

**Request Body:**
```json
{
  "client_fullname": "string (2-255 chars, required)",
  "client_job": "string (optional, max 255 chars)",
  "comment": "string (10-2000 chars, required)",
  "rating": "number 1-5 (optional)",
  "is_active": "boolean (optional, default: true)"
}
```

**Response:** `201 Created`

#### Get Testimonial by ID
```http
GET /api/testimonials/:id
```

**Response:** `200 OK`

#### Update Testimonial (Admin)
```http
PUT /api/testimonials/:id
```

**Request Body:** Same as POST (all fields optional)

**Response:** `200 OK`

#### Delete Testimonial (Admin)
```http
DELETE /api/testimonials/:id
```

**Response:** `200 OK`

---

### 3. Courses

#### Get All Courses
```http
GET /api/courses
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "IELTS Hazırlık Programı",
      "slug": "ielts",
      "mini_desc": "Akademik ve Genel IELTS sınavlarına...",
      "is_active": true,
      "created_at": "2026-01-29T10:00:00Z"
    }
  ],
  "message": "Courses retrieved successfully"
}
```

#### Create Course (Admin)
```http
POST /api/courses
```

**Request Body:**
```json
{
  "title": "string (2-255 chars, required)",
  "slug": "slug-format (required, unique)",
  "mini_desc": "string (optional, max 500 chars)",
  "description": "string (optional)",
  "is_active": "boolean (optional, default: true)"
}
```

**Response:** `201 Created`

#### Get Course by ID
```http
GET /api/courses/:id
```

**Response:** `200 OK`

#### Update Course (Admin)
```http
PUT /api/courses/:id
```

**Request Body:** Same as POST (all fields optional)

**Response:** `200 OK`

#### Delete Course (Admin)
```http
DELETE /api/courses/:id
```

**Response:** `200 OK`

#### Get Course by Slug (With Variants)
```http
GET /api/courses/slug/:slug
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "IELTS Hazırlık Programı",
    "slug": "ielts",
    "mini_desc": "...",
    "description": "...",
    "course_variants": [
      {
        "id": "uuid",
        "title": "Grup Dersi",
        "course_id": "uuid",
        "price": 4500,
        "capacity": 6,
        "description": "...",
        "is_featured": false,
        "is_active": true
      }
    ]
  },
  "message": "Course retrieved successfully"
}
```

---

### 4. FAQs

#### Get All FAQs (With Categories)
```http
GET /api/faqs
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "question": "Dersler nasıl yapılıyor?",
      "answer": "Derslerimiz online olarak Zoom üzerinden...",
      "category_id": 1,
      "sort_order": 1,
      "is_active": true,
      "faq_categories": {
        "id": 1,
        "name": "Genel",
        "slug": "genel"
      }
    }
  ],
  "message": "FAQs retrieved successfully"
}
```

#### Create FAQ (Admin)
```http
POST /api/faqs
```

**Request Body:**
```json
{
  "question": "string (10-500 chars, required)",
  "answer": "string (min 10 chars, required)",
  "category_id": "number (optional)",
  "sort_order": "number (optional, default: 0)",
  "is_active": "boolean (optional, default: true)"
}
```

**Response:** `201 Created`

#### Get FAQ by ID
```http
GET /api/faqs/:id
```

**Response:** `200 OK`

#### Update FAQ (Admin)
```http
PUT /api/faqs/:id
```

**Request Body:** Same as POST (all fields optional)

**Response:** `200 OK`

#### Delete FAQ (Admin)
```http
DELETE /api/faqs/:id
```

**Response:** `200 OK`

---

### 5. FAQ Categories

#### Get All Categories
```http
GET /api/faq-categories
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Genel",
      "slug": "genel",
      "sort_order": 1,
      "is_active": true
    }
  ],
  "message": "FAQ categories retrieved successfully"
}
```

#### Create Category (Admin)
```http
POST /api/faq-categories
```

**Request Body:**
```json
{
  "name": "string (2-100 chars, required)",
  "slug": "slug-format (optional)",
  "sort_order": "number (optional, default: 0)",
  "is_active": "boolean (optional, default: true)"
}
```

**Response:** `201 Created`

---

## HTTP Status Codes

| Code | Description |
|------|-------------|
| 200  | OK - Request successful |
| 201  | Created - Resource created successfully |
| 400  | Bad Request - Invalid input data |
| 401  | Unauthorized - Authentication required |
| 403  | Forbidden - Insufficient permissions |
| 404  | Not Found - Resource not found |
| 405  | Method Not Allowed - HTTP method not supported |
| 409  | Conflict - Resource already exists |
| 422  | Unprocessable Entity - Validation failed |
| 500  | Internal Server Error - Server error |

---

## Error Codes

| Code | Description |
|------|-------------|
| `BAD_REQUEST` | Invalid request parameters |
| `UNAUTHORIZED` | Authentication required |
| `FORBIDDEN` | Insufficient permissions |
| `NOT_FOUND` | Resource not found |
| `METHOD_NOT_ALLOWED` | HTTP method not supported |
| `CONFLICT` | Resource already exists |
| `UNPROCESSABLE_ENTITY` | Validation failed |
| `INTERNAL_ERROR` | Server error |

---

## Validation Error Format

When validation fails, the error response includes details:

```json
{
  "success": false,
  "error": {
    "message": "Validation failed",
    "code": "UNPROCESSABLE_ENTITY",
    "details": {
      "email": "Invalid email address",
      "message": "Message must be at least 10 characters"
    }
  }
}
```

---

## Notes

- All timestamps are in ISO 8601 format
- IDs are auto-generated (UUID for courses, integer for others)
- Admin endpoints should be protected with authentication (not yet implemented)
- Contact forms automatically capture IP address and user agent
- Deleted resources are permanently removed (consider soft deletes in future)
