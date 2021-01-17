typedef void (*InvokeHandler)(const char *message);
typedef struct App app_t;
extern app_t *new_app();
extern void *run_app(app_t *app);
