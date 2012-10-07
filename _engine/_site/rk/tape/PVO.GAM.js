function tape_file() {
var file = {
name: "PVO.GAM",
start: 0x3000,
end: 0x3500,
entry: 0x3000,
image:
"\xC5\xE5\xD5\xD5\x46\x23\x4E\x23\xC5\xE5\x21\x00\x08\xE3\x7E\x23\xE3\x07\xD2\x1E\x30\xF5\xCD\x3E\x30\xD2\x1D\x30\x6C\xF1\x14\x05" +
"\xC2\x2F\x30\xC1\xC1\xD1\x1C\xD5\x0D\xCA\x38\x30\xC5\x3B\x3B\x25\xC2\x11\x30\x26\x08\xC3\x0D\x30\xC1\xD1\x7D\xE1\xC1\xC9\xE5\xD5" +
"\x97\x21\x7C\x30\x7B\x1E\x00\x1F\xD2\x4E\x30\x1C\x1C\x3F\x17\x85\x6F\x7E\x23\x66\x6F\x7A\x1F\xD2\x5B\x30\x1C\x85\xD2\x60\x30\x24" +
"\x6F\x7B\x11\x78\x30\x83\x5F\x1A\xA6\x1A\xC2\x72\x30\xAE\x77\xD1\xE1\xC9\xAE\x77\x37\xD1\xE1\xC9\x01\x02\x10\x04\xC2\x77\x10\x78" +
"\x5E\x78\xAC\x78\xFA\x78\x48\x79\x96\x79\xE4\x79\x32\x7A\x80\x7A\xCE\x7A\x1C\x7B\x6A\x7B\xB8\x7B\x06\x7C\x54\x7C\xA2\x7C\xF0\x7C" +
"\x3E\x7D\x8C\x7D\xDA\x7D\x28\x7E\x76\x7E\xC4\x7E\x12\x7F\xE5\xD5\xC5\x2A\xCD\x31\xC3\xBE\x30\x2A\xCB\x31\x11\x14\x00\x19\x22\xCB" +
"\x31\x7E\xFE\xFF\xCA\xC7\x31\xB7\xCA\xB7\x30\x23\x23\x5E\x23\x56\x23\x7E\x23\xB7\xCA\xE2\x30\x4E\x06\x00\xEB\x09\x09\x7E\x23\x66" +
"\x6F\xEB\x23\x7E\x23\x66\x6F\xEB\xCD\x00\x30\x2A\xCB\x31\x23\x23\x5E\x23\x56\x23\x7E\x23\xB7\xCA\x0C\x31\x4E\x0C\xEB\x06\x00\xB9" +
"\xC2\x04\x31\x48\x09\x09\x7E\x23\x66\x6F\xEB\x71\x23\xD5\x5E\x23\x56\x23\x4E\x23\x46\x23\x7A\x80\xBE\x23\xFA\x21\x31\xBE\xFA\x27" +
"\x31\x78\xCD\x9F\x31\x47\x82\x57\x7B\x81\x23\xBE\x23\xFA\x34\x31\xBE\xFA\x3A\x31\x79\xCD\x9F\x31\x4F\x83\x5F\xE1\xCD\x00\x30\x2A" +
"\xCB\x31\x23\x23\x23\x23\x23\x23\x73\x23\x72\x23\x71\x23\x70\xB7\xCA\xB7\x30\x2A\xCB\x31\x01\x0F\x00\x09\x7E\xB7\xC2\x6C\x31\x2A" +
"\xCB\x31\x01\x08\x00\x09\x77\x23\x77\xC3\xB7\x30\xFE\x01\xC2\x84\x31\x2A\xCB\x31\x01\x08\x00\x09\x7E\x3D\x2F\x77\x23\x7E\x3D\x2F" +
"\x77\xC3\xB7\x30\xFE\x02\xC2\xB7\x30\x01\x12\x00\x2A\xCB\x31\x09\xC1\xD1\x7E\x23\x66\x6F\x33\x33\x33\x33\xE5\x3B\x3B\xE1\xC9\xF5" +
"\xE5\xD5\x2A\xCB\x31\x11\x0E\x00\x19\x7E\xD1\xE1\xFE\x01\xC2\xB5\x31\xF1\x3D\x2F\xC9\xB7\xC2\xBE\x31\xF1\xAF\x47\x4F\xC9\xC1\xC1" +
"\xC1\x01\x10\x00\xC3\x8C\x31\xC1\xD1\xE1\xC9\x51\x33\x51\x33\xC5\x06\x1C\x48\xFB\x0D\xC2\xD4\x31\x48\xF3\x0D\xC2\xDA\x31\x05\xC2" +
"\xD2\x31\xC1\xC9\xE5\xC5\x2A\xFE\x31\x7C\xE6\xC0\x47\x17\xA8\xE6\x80\x29\xCA\xF7\x31\x23\x23\x22\xFE\x31\x7C\xC1\xE1\xC9\xAC\x5E" +
"\xF5\xC5\x01\xC0\x00\xCD\xE4\x31\xFE\x80\xD2\x0E\x32\xFB\x0B\xCD\xE4\x31\xFE\x7F\xD2\x18\x32\xF3\x78\xB1\xC2\x05\x32\xF3\xC1\xF1" +
"\xC9\x21\x51\x33\x22\xCD\x31\x21\x40\x34\x11\x2C\x60\xCD\x00\x30\xEB\x22\x6B\x33\xCD\xE4\x31\x67\x3E\x1C\x32\xD1\x31\x7F\x2B\x7C" +
"\xB5\xC2\x3D\x32\x21\x50\x34\x11\x10\x00\xCD\x00\x30\xEB\x22\x57\x33\x0E\x06\xCD\x46\x33\x3C\x32\x5A\x33\x0E\x07\xCD\x46\x33\x32" +
"\x59\x33\x0E\x04\xCD\x46\x33\xC6\x11\x32\x5E\x33\xCD\xAE\x30\xCD\xCF\x31\xCD\x7B\x33\xFE\xFF\xCA\x6C\x32\x3E\x30\x32\xD1\x31\x3E" +
"\x16\x32\x65\x33\xCD\xAE\x30\xCD\xCF\x31\xC3\x7F\x32\x2A\x57\x33\x7A\xFE\x76\xD2\xAF\x32\x3A\x59\x33\x3D\x2F\x32\x59\x33\xEB\x21" +
"\x50\x34\xCD\x00\x30\x3A\x65\x33\xB7\xCA\x6C\x32\xC3\x7F\x32\x21\x10\x00\x22\x57\x33\x2A\x6B\x33\xEB\x21\x40\x34\xCD\x00\x30\x21" +
"\x2C\x60\x22\x6B\x33\xAF\x32\x65\x33\xEB\x21\x40\x34\xCD\x00\x30\x3E\x1C\x32\xD1\x31\x2A\x57\x33\x7C\xB7\xCA\x34\x32\xC3\x6C\x32" +
"\x2A\x6B\x33\xEB\x21\x60\x34\xCD\x00\x30\xCD\x00\x32\xCD\x00\x30\x21\x67\x34\xCD\x00\x30\xCD\x00\x32\xCD\x00\x30\x21\x6E\x34\xCD" +
"\x00\x30\xCD\x00\x32\xCD\x00\x30\x21\x80\x34\xCD\x00\x30\xCD\x00\x32\xCD\x00\x30\x21\x8C\x34\xCD\x00\x30\xCD\x00\x32\xCD\x00\x30" +
"\x21\x98\x34\xCD\x00\x30\xCD\x00\x32\xCD\x00\x30\x2A\x57\x33\xEB\x21\x50\x34\xCD\x00\x30\xC3\xAF\x32\x2A\x6B\x33\xEB\x21\x40\x34" +
"\xCD\x00\x30\xC3\xB5\x32\xCD\xE4\x31\x37\x3F\x1F\x0D\xC2\x49\x33\xC9\x01\x01\x50\x34\x00\x00\x10\x1B\x00\x03\x00\x79\x00\x16\x02" +
"\x02\x8D\x32\xE0\x32\x00\x00\x40\x34\x00\x00\x2C\x60\xFE\x00\x00\x70\x00\x2E\x02\x02\x39\x33\xE0\x32\xFF\xFF\x01\x00\x02\x0B\x78" +
"\xB1\xC2\x7E\x33\xCD\x1B\xF8\xC9\x55\xE0\xF8\x02\x0C\x07\x33\x01\xFD\xA9\xE6\x0E\x31\xC1\x78\x0C\x0C\x07\x63\x09\xC8\x94\x78\xC1" +
"\x51\x22\xAC\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x0E\x1F\xCD\x09\xF8\x21\x0E\x34\xCD\x18\xF8\xC3\x21\x32\x20\x20\x20\x20\x70\x20\x77\x20\x6F\x20\x2D\x20\x31\x39\x38\x37\x0D\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x04\x04\x22\x25\xED\x80\x00\x00\x40\x40\x40\x40\x40\x40\x40\x40\x10\x07\x05\x75\x00\x20\xC0\xF8\xE1\x04\xFF\x82\x40\xFC\x00\x00" +
"\x08\x05\x00\x38\x7C\x78\x10\x08\x05\x38\x7C\x3E\x7C\x1A\x08\x05\xCC\xFF\xEE\x3C\x10\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x0C\x07\x09\x01\xF8\x3F\xE3\x1F\x55\xE0\xF8\x02\x0C\x07\x33\x01\xFD\xA9\xE6\x0E\x31\xC1\x78\x0C\x0C\x07\x63\x09\xC8\x94\x78\xC1" +
"\x51\x22\xAC\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00"};
ui.file_loaded(file);
}
tape_file();