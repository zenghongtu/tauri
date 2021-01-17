typedef void (*InvokeHandler)(const char *message);

struct AppBuilder;

extern "C" {
AppBuilder new_app_builder();
void run_app(const AppBuilder *app);
} // extern "C"
