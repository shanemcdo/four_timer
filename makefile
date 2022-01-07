TARGET_DIR=target

all: $(TARGET_DIR)
	npm run build
	cp -r css target/css
	cp -r js target/js

$(TARGET_DIR):
	mkdir $(TARGET_DIR)

clean:
	rm -rf target

.PHONY: all clean
