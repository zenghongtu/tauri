
ifeq ($(shell uname),Darwin)
    LDFLAGS := -Wl
	LD_LIBRARY_PATH := target/release/libtauri.dylib
else
    LDFLAGS := -Wl,--gc-sections -lpthread -ldl
	LD_LIBRARY_PATH := target/release/libtauri.so
endif

all: target/tauri
	target/tauri

target:
	mkdir -p $@

target/tauri: target/main.o $(LD_LIBRARY_PATH)
	$(CC) -o $@ $^ $(LDFLAGS)

$(LD_LIBRARY_PATH): src/lib.rs Cargo.toml
	cargo build --release

target/main.o: main.c include/tauri.h | target
	$(CC) -o $@ -c $<

clean:
	rm -rf target