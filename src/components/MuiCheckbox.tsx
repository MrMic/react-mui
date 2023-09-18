import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const MuiCheckbox = () => {
  //      ━━━━━━━━━━━━━━━━━━━━━━━ acceptTnC ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const [acceptTnC, setAcceptTnC] = useState(false);
  // console.log({ acceptTnC });

  //      ━━━━━━━━━━━━━━━━━━━━━━━━━ skills ━
  const [skills, setSkills] = useState<string[]>([]);
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  console.log({ skills });

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms & conditions"
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={acceptTnC}
              onChange={() => setAcceptTnC(!acceptTnC)}
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={() => setAcceptTnC(!acceptTnC)}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
              label="CSS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="js"
                  checked={skills.includes("js")}
                  onChange={handleSkillChange}
                />
              }
              label="JavaScript"
            />
          </FormGroup>
          <FormHelperText>Invalid selection!</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
